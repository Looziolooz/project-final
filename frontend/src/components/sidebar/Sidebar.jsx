import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="LD.png" alt="traveller" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum
          aut dolore officia dicta ut amet aliquid tempora accusamus.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarListItem">
          <li className="sidebarListItem">Europe</li>
          <li className="sidebarListItem">South America</li>
          <li className="sidebarListItem">North America</li>
          <li className="sidebarListItem">Asia</li>
          <li className="sidebarListItem">Africa</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-x-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
