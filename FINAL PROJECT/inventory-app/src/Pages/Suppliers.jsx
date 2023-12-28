import { useEffect, useState } from "react";
import { supplierHeaders } from "../data";

const Suppliers = () => {
  const [showForm, setShowForm] = useState(false);
  const [suppliers, setSuppliers] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleToggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const handleGetSuppliers = async () => {
    const response = await fetch("http://localhost:5000/suppliers/all");
    const data = await response.json();
    setSuppliers(data.suppliers);
  };

  const handleAddSupplier = async (e) => {
    e.preventDefault();

    const newSupplier = {
      Supplier_Name: name,
      Phone: phone,
      Email: email,
    };

    const response = await fetch("http://localhost:5000/suppliers/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSupplier),
    });

    if (response.status === 200 || response.status === 201) {
      setEmail("");
      setName("");
      setPhone("");
      window.location.reload();
    } else {
      alert("Error");
      console.log(newSupplier);
    }
  };

  useEffect(() => {
    handleGetSuppliers();
  }, []);

  return (
    <div className="content">
      {showForm && <div className="overlay" onClick={handleToggleForm}></div>}
      <div className="header">
        <button className="btn" onClick={handleToggleForm}>
          +
        </button>
      </div>
      {showForm && (
        <form id="suppliers-form" className="form" onSubmit={handleAddSupplier}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            name="price"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="email">email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="btns">
            <button className="btn" onClick={() => setShowForm(false)}>
              Cancel
            </button>
            <button className="btn" type="submit">
              Add
            </button>
          </div>
        </form>
      )}
      <table>
        <thead>
          <tr>
            {supplierHeaders.map((header) => {
              return <th key={header.id}>{header.name}</th>;
            })}
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((value) => {
            return (
              <tr key={value.Supplier_ID}>
                {Object.values(value).map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
                <td>
                  <button
                    className="btn"
                    onClick={async () => {
                      const response = await fetch(
                        `http://localhost:5000/suppliers/delete/${value.Supplier_ID}`,
                        {
                          method: "DELETE",
                        }
                      );
                      if (response.status === 200 || response.status === 201) {
                        window.location.reload();
                      } else {
                        alert("Error");
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Suppliers;
