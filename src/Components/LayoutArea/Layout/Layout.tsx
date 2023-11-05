import React, { useEffect, useRef, useState } from "react";
import About from "../../AboutArea/About/About";
import Contact from "../../AboutArea/Contact/Contact";
import Resume from "../../AboutArea/Resume/Resume";
import ProjectList from "../../ProjectArea/ProjectList/ProjectList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./Layout.css";

function Layout(): JSX.Element {

    // Local state for layout scrolling animation:
    const [fadeIn, setIsFadeIn] = useState(false);
    const scrollY = useRef(0);

    // Handle user viewport position to trigger animation:
    function handleUserScrolling() {
        
        scrollY.current = window.scrollY;
        
        const element = projectListRef.current;

        if (element) {
            const elementPosition = element.offsetTop;
            const elementHeight = element.offsetHeight;
            const windowPosition = scrollY.current + window.innerHeight;

            if (windowPosition > elementPosition && scrollY.current < elementPosition + elementHeight) {
                setIsFadeIn(true);    
            }
            else {
                setIsFadeIn(false);
            }
        }
    }

    // Add event listener when the component mounts & remove when the component destroys:
    useEffect(() => {
        window.addEventListener("scroll", handleUserScrolling);

        return () => {
            window.removeEventListener("scroll", handleUserScrolling);
        }
    }, []);

    // Refs for scrolling sections
    const menuRef = useRef<HTMLDivElement>(null);
    const projectListRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    // Scrolling cases:
    const scrollToMenu = () => {
        if (menuRef.current) {
            menuRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToProjectList = () => {
        if (projectListRef.current) {
            projectListRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="Layout">

            <nav  ref={menuRef}>
                <Menu
                    scrollToMenu={scrollToMenu}
                    scrollToProjectList={scrollToProjectList}
                    scrollToAbout={scrollToAbout}
                    scrollToContact={scrollToContact}
                />
            </nav>

            <header>
                <div>
                    <Header />
                </div>
            </header>

            <main>
                <div className={`${fadeIn ? "fadeIn" : ""}`} ref={projectListRef}>
                    <ProjectList />
                </div>
                <div ref={aboutRef}>
                    <About />
                </div>
            </main>

            <aside>
                <Resume />
            </aside>

            <footer>
                <div ref={contactRef}>
                    <Contact />
                </div>
                <Footer />
            </footer>

        </div>
    );
}

export default Layout;
