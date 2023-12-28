import logo from "../images/logo.png";
import icon2 from "../images/product.png";
import icon3 from "../images/supplier.png";
import icon4 from "../images/inventory.png";
import { useLocation } from "react-router-dom";

const links = [
  {
    id: 1,
    name: "Products",
    link: "/",
    img: icon2,
  },
  {
    id: 2,
    name: "Supplier",
    link: "/suppliers",
    img: icon3,
  },
  {
    id: 3,
    name: "Inventories",
    link: "/inventories",
    img: icon4,
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="side-bar">
      <div className="logo">
        <img src={logo} alt="" />
        <h2>DBB</h2>
      </div>
      <div className="page-links">
        {links.map((link) => {
          return (
            <a
              href={link.link}
              className={pathname === link.link ? "selected link" : "link"}
              key={link.id}
            >
              <img src={link.img} alt="" />
              {link.name}
            </a>
          );
        })}
        <a
          href="/locations"
          className={pathname === "/locations" ? "selected link" : "link"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"
            />
            <path
              fill="currentColor"
              d="m16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 1 0-18 0a8.905 8.905 0 0 0 1.813 5.395"
            />
          </svg>
          Locations
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
