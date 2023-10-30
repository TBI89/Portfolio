import { Navigate, Route, Routes } from "react-router-dom";
import ProjectList from "../../ProjectArea/ProjectList/ProjectList";
import PageNotFound from "../PageNotFound/PageNotFound";
import About from "../../AboutArea/About/About";
import Contact from "../../AboutArea/Contact/Contact";

function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/project-list" element={<ProjectList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Navigate to="/header" />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default Routing;
