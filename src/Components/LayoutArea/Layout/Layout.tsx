import React, { useRef } from "react";
import About from "../../AboutArea/About/About";
import Contact from "../../AboutArea/Contact/Contact";
import Resume from "../../AboutArea/Resume/Resume";
import ProjectList from "../../ProjectArea/ProjectList/ProjectList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./Layout.css";

function Layout(): JSX.Element {

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
                <div ref={projectListRef}>
                    <ProjectList />
                </div>
                <div ref={aboutRef}>
                    <About />
                </div>
                {/* <div ref={contactRef}>
                    <Contact />
                </div> */}
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
