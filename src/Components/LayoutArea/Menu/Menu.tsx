import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

interface MenuProps {
    scrollToHeader: () => void;
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
            setDisplayScrollIcon(scrollY < 0);
        }

        handleUserScrolling();

        window.addEventListener("scroll", handleUserScrolling);

        return () => {
            window.removeEventListener("scroll", handleUserScrolling);
        };
    }, [window.scrollY]);

    return (
        <div className="Menu">
            <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
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
                <NavLink className="navbar-brand" to="/header" onClick={props.scrollToHeader}><ArrowUpwardIcon /></NavLink>
            </div>
        </div>
    );
}

export default Menu;
