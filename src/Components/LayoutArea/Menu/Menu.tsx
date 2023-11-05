import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

interface MenuProps {
    scrollToMenu: () => void;
    scrollToProjectList: () => void;
    scrollToAbout: () => void;
    scrollToContact: () => void;
}

function Menu(props: MenuProps): JSX.Element {

    // Local state to the appearance of the ScrollToTopContainer:
    const [displayScrollIcon, setDisplayScrollIcon] = useState(false);

    // Handle user top scrolling:
    useEffect(() => {

        function handleUserScrolling() {
            const scrollY = window.scrollY;
            setDisplayScrollIcon(scrollY > 500);
        }

        window.addEventListener("scroll", handleUserScrolling);

        return () => {
            window.removeEventListener("scroll", handleUserScrolling);
        };

    }, []);

    return (
        <div className="Menu">
            <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
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

            <div className={`ScrollToTopContainer ${displayScrollIcon ? 'visible' : 'hidden'}`}>
                <NavLink className="navbar-brand" to="/header" onClick={props.scrollToMenu}><ArrowUpwardIcon /></NavLink>
            </div>
        </div>
    );
}

export default Menu;
