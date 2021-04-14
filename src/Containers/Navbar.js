import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="nav header">
    <Link className="home-link" to="/">
      <h4 className=" nav-text"> Healthy Meals</h4>
    </Link>
  </div>
);

export default NavBar;
