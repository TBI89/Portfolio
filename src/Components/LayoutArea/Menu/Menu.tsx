import { NavLink } from 'react-router-dom';
import './Menu.css';

interface MenuProps {
  scrollToHeader: () => void;
  scrollToProjectList: () => void;
  scrollToAbout: () => void;
  scrollToContact: () => void;
}

function Menu(props: MenuProps): JSX.Element {
  return (
    <div className="Menu">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/header" onClick={props.scrollToHeader}>TBI</NavLink>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects" onClick={props.scrollToProjectList}>Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={props.scrollToAbout}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" onClick={props.scrollToContact}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
