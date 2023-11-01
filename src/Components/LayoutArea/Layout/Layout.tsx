import { RefObject, useRef } from "react";
import About from "../../AboutArea/About/About";
import Contact from "../../AboutArea/Contact/Contact";
import Resume from "../../AboutArea/Resume/Resume";
import ProjectList from "../../ProjectArea/ProjectList/ProjectList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./Layout.css";

function Layout(): JSX.Element {

    // Section refs:
    const headerRef: RefObject<HTMLDivElement> = useRef(null);
    const projectListRef: RefObject<HTMLDivElement> = useRef(null);
    const aboutRef: RefObject<HTMLDivElement> = useRef(null);
    const contactRef: RefObject<HTMLDivElement> = useRef(null);

    // Scrolling cases:
    function scrollToHeader() {
        if (headerRef.current) {
            headerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    function scrollToProjectList() {
        if (projectListRef.current) {
            projectListRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    function scrollToAbout() {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    function scrollToContact() {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

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
                <Header />
            </header>

            <main>
                <ProjectList />
                <About />
                <Contact />
            </main>

            <aside>
                <Resume />
            </aside>

            <footer>
                <Footer />
            </footer>

        </div>
    );
}

export default Layout;
