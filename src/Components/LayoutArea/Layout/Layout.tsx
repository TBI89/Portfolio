import About from "../../AboutArea/About/About";
import Contact from "../../AboutArea/Contact/Contact";
import Resume from "../../AboutArea/Resume/Resume";
import ProjectList from "../../ProjectArea/ProjectList/ProjectList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">

            <nav>
                <Menu />
            </nav>

            <header>
                <Header />
            </header>

            <main>
                {/* <Routing /> */}
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
