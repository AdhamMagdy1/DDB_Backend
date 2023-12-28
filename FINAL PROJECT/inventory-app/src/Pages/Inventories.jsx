import { useEffect, useState } from "react";
import { inventoriesHeaders } from "../data";

const Inventories = () => {
  const [showForm, setShowForm] = useState(false);
  const [inventories, setInventories] = useState([]);
  const [capacity, setCapacity] = useState("");
  const [location_id, setLocation_id] = useState("");
  const [locations, setLocations] = useState([]);

  const handleToggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const handleGetInventories = async () => {
    const response = await fetch("http://localhost:5000/inventories/all");
    const data = await response.json();
    setInventories(data.inventories);
  };

  const getLocations = async () => {
    const response = await fetch("http://localhost:5000/locations/all");
    const data = await response.json();
    setLocations(data.locations);
  };

  const handleAddInventory = async (e) => {
    e.preventDefault();

    const newInventories = {
      Capacity: capacity,
      Location_ID: location_id,
    };

    const response = await fetch("http://localhost:5000/inventories/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newInventories),
    });

    if (response.status === 200 || response.status === 201) {
      setCapacity("");
      setLocation_id("");
      window.location.reload();
    } else {
      alert("Error");
    }
  };

  useEffect(() => {
    handleGetInventories();
    getLocations();
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
        <form
          id="inventories-form"
          className="form"
          onSubmit={handleAddInventory}
        >
          <label htmlFor="capacity">Capacity:</label>
          <input
            type="text"
            name="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
          <label htmlFor="location">Location:</label>
          <select
            name="location"
            onChange={(e) => setLocation_id(e.target.value)}
          >
            <option value="">Select Location</option>
            {locations.map((location) => {
              return (
                <option key={location.Location_ID} value={location.Location_ID}>
                  {location.Location_Name}
                </option>
              );
            })}
          </select>
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
            {inventoriesHeaders.map((header) => {
              return <th key={header.id}>{header.name}</th>;
            })}
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {inventories.map((value) => {
            return (
              <tr key={value.Inventory_ID}>
                {Object.values(value).map((item, index) => {
                  if (item === null) return null;
                  return <td key={index}>{item}</td>;
                })}
                <td>
                  <button
                    className="btn"
                    onClick={async () => {
                      const response = await fetch(
                        `http://localhost:5000/inventories/delete/${value.Inventory_ID}`,
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

export default Inventories;
