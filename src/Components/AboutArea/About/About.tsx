import aboutImage from "../../../Assets/Images/about-image.png";
import "./About.css";

function About(): JSX.Element {

    return (
        <div className="About">
            <h2>Who am i?</h2>
            <img src={aboutImage} />
        </div>
    );
}

export default About;
