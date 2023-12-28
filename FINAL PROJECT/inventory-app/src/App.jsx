import Sidebar from "./components/Sidebar";
import Inventories from "./Pages/Inventories";
import Locations from "./Pages/Locations";
import Products from "./Pages/pRODUCTS";
import Suppliers from "./Pages/Suppliers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/suppliers" element={<Suppliers />} />
        <Route exact path="/inventories" element={<Inventories />} />
        <Route exact path="/locations" element={<Locations />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
