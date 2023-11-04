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

    // Local state for layout scrolling animations:
    const [fadeIn, setIsFadeIn] = useState(false);
    const scrollY = useRef(0);

    // Handle user viewport position to trigger animation:
    function handleUserScrolling() {

        console.log("Scrolling....");

        scrollY.current = window.scrollY;

        const element = projectListRef.current;

        if (element) {
            const elementPosition = element.offsetTop;
            const elementHeight = element.offsetHeight;
            const windowPosition = scrollY.current + window.innerHeight;

            if (windowPosition > elementPosition && scrollY.current < elementPosition + elementHeight) {
                setIsFadeIn(true);
                console.log("fade in = true");
            }
            else {
                setIsFadeIn(false);
                console.log("fade in = false");
            }
        }
    }

    // Add event listener when the component mounts & remove when the component destroys:
    useEffect(() => {

        console.log("useEffect started...");
        
        window.addEventListener("scroll", handleUserScrolling);
        console.log("Event listener added...");
        console.log("Scroll position", window.scrollY);

        return () => {
            window.removeEventListener("scroll", handleUserScrolling);
            console.log("Event listener removed...");
        }
    }, []);

    // Refs for scrolling sections
    const headerRef = useRef<HTMLDivElement>(null);
    const projectListRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    // Scrolling cases:
    const scrollToHeader = () => {
        if (headerRef.current) {
            headerRef.current.scrollIntoView({ behavior: "smooth" });
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

            <nav>
                <Menu
                    scrollToHeader={scrollToHeader}
                    scrollToProjectList={scrollToProjectList}
                    scrollToAbout={scrollToAbout}
                    scrollToContact={scrollToContact}
                />
            </nav>

            <header>
                <div ref={headerRef}>
                    <Header />
                </div>
            </header>

            <main>
                <div className={`LayoutProjectList ${fadeIn ? "fadeIn" : ""}`} ref={projectListRef}>
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
