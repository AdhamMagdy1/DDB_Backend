import { useEffect, useState } from "react";
import { productHeaders } from "../data";

const Products = () => {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  // const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const currentProduct = products.find(
    (product) => product.Product_ID === editId
  );

  const handleToggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const handleGetProducts = async () => {
    const response = await fetch("http://localhost:5000/products/all");
    const data = await response.json();
    setProducts(data.products);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const newProduct = {
      Product_Name: name,
      Unit_Price: price,
      Manufacturer: manufacturer,
      // quantity,
      Description: description,
    };

    if (editId) {
      const response = await fetch(
        `http://localhost:5000/products/update/${editId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        }
      );

      if (response.status === 200 || response.status === 201) {
        setName("");
        setPrice("");
        setManufacturer("");
        setDescription("");
        window.location.reload();
      } else {
        alert("Error");
      }
    } else {
      const response = await fetch("http://localhost:5000/products/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.status === 200 || response.status === 201) {
        setName("");
        setPrice("");
        setManufacturer("");
        setDescription("");
        window.location.reload();
      } else {
        alert("Error");
      }
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  useEffect(() => {
    if (currentProduct) {
      setName(currentProduct.Product_Name);
      setPrice(currentProduct.Unit_Price);
      setManufacturer(currentProduct.Manufacturer);
      setDescription(currentProduct.Description);
    }
  }, [currentProduct]);

  useEffect(() => {
    if (!showForm) {
      setName("");
      setPrice("");
      setManufacturer("");
      setDescription("");
      setEditId(null);
    }
  }, [showForm]);

  return (
    <div className="content">
      {showForm && <div className="overlay" onClick={handleToggleForm}></div>}
      <div className="header">
        <button className="btn" onClick={handleToggleForm}>
          +
        </button>
      </div>
      {showForm && (
        <form id="products-form" className="form" onSubmit={handleAddProduct}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="manufacturer">Manufacturer:</label>
          <input
            type="text"
            name="manufacturer"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="btns">
            <button className="btn" onClick={() => setShowForm(false)}>
              Cancel
            </button>
            <button className="btn" type="submit">
              {editId ? "Update" : "Add"}
            </button>
          </div>
        </form>
      )}
      <table>
        <thead>
          <tr>
            {productHeaders.map((header) => {
              return <th key={header.id}>{header.name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {products.map((value) => {
            return (
              <tr key={value.Product_ID}>
                {Object.values(value).map((item, index) => {
                  if (item === null) return null;
                  return <td key={index}>{item}</td>;
                })}
                <td>
                  <button
                    className="btn"
                    onClick={() => {
                      setShowForm(true);
                      setEditId(value.Product_ID);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn"
                    onClick={async () => {
                      const response = await fetch(
                        `http://localhost:5000/products/delete/${value.Product_ID}`,
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

export default Products;
