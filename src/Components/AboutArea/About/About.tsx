import "./About.css";
import aboutImage from "../../../Assets/Images/about-image.png";

function About(): JSX.Element {
    return (
        <div className="About">
            <img src={aboutImage} />
        </div>
    );
}

export default About;
