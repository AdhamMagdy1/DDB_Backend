import { useEffect, useState } from "react";
import { locationsHeaders } from "../data";

const Locations = () => {
  const [showForm, setShowForm] = useState(false);
  const [locations, setLocations] = useState([]);
  const [locationName, setLocationName] = useState("");
  const [address, setAddress] = useState("");
  const [manager, setManager] = useState("");
  const [storageCapacity, setStorageCapacity] = useState("");

  const handleToggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const handleGetLocations = async () => {
    const response = await fetch("http://localhost:5000/locations/all");
    const data = await response.json();
    setLocations(data.locations);
  };

  const handleAddInventory = async (e) => {
    e.preventDefault();

    const newLocations = {
      Location_Name: locationName,
      Address: address,
      Manager: manager,
      Storage_Capacity: storageCapacity,
    };

    const response = await fetch("http://localhost:5000/locations/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLocations),
    });

    if (response.status === 200 || response.status === 201) {
      setLocationName("");
      setAddress("");
      setManager("");
      setStorageCapacity("");
      window.location.reload();
    } else {
      alert("Error");
    }
  };

  useEffect(() => {
    handleGetLocations();
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
          id="locations-form"
          className="form"
          onSubmit={handleAddInventory}
        >
          <label htmlFor="locationName">Location Name:</label>
          <input
            type="text"
            name="locationName"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
          />
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="manager">Manager:</label>
          <input
            type="text"
            name="manager"
            value={manager}
            onChange={(e) => setManager(e.target.value)}
          />
          <label htmlFor="storageCapacity">Storage Capacity:</label>
          <input
            type="text"
            name="storageCapacity"
            value={storageCapacity}
            onChange={(e) => setStorageCapacity(e.target.value)}
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
            {locationsHeaders.map((header) => {
              return <th key={header.id}>{header.name}</th>;
            })}
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((value) => {
            return (
              <tr key={value.Location_ID}>
                {Object.values(value).map((item, index) => {
                  if (item === null) return null;
                  return <td key={index}>{item}</td>;
                })}
                <td>
                  <button
                    className="btn"
                    onClick={async () => {
                      const response = await fetch(
                        `http://localhost:5000/locations/delete/${value.Location_ID}`,
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

export default Locations;
