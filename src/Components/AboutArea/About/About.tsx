import "./About.css";
import reactIcon from "../../../Assets/Images/react-icon.png";
import nodeIcon from "../../../Assets/Images/node-icon.png";
import mongoIcon from "../../../Assets/Images/mongo-icon.png";
import sqlIcon from "../../../Assets/Images/sql-icon.png";
import typescriptIcon from "../../../Assets/Images/typescript-icon.png";
import javascriptIcon from "../../../Assets/Images/javascript-icon.png";
import angularIcon from "../../../Assets/Images/angular-icon.png";
import bootstrapIcon from "../../../Assets/Images/bootstrap-icon.png";
import cssIcon from "../../../Assets/Images/css-icon.png";
import htmlIcon from "../../../Assets/Images/html-icon.png";
import dockerIcon from "../../../Assets/Images/docker-icon.png";

function About(): JSX.Element {

    return (
        <div className="About">

            <h2>My Tech Stack</h2>

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={reactIcon} className="rounded-circle" width="100px" height="90"/>
                    </div>
                    <div className="carousel-item">
                        <img src={nodeIcon} className="rounded-circle" width="100px" height="90"/>
                    </div>
                    <div className="carousel-item">
                        <img src={mongoIcon} className="rounded-circle" width="100px" height="90"/>
                    </div>
                    <div className="carousel-item">
                        <img src={sqlIcon} className="rounded-circle" width="100px" height="90"/>
                    </div>
                    <div className="carousel-item">
                        <img src={typescriptIcon} className="rounded-circle" width="100px" height="90"/>
                    </div>
                    <div className="carousel-item">
                        <img src={javascriptIcon} className="rounded-circle" width="100px" height="90px"/>
                    </div>
                    <div className="carousel-item">
                        <img src={angularIcon} className="rounded-circle" width="100px" height="90px"/>
                    </div>
                    <div className="carousel-item">
                        <img src={bootstrapIcon} className="rounded-circle" width="100px" height="90px"/>
                    </div>
                    <div className="carousel-item">
                        <img src={cssIcon} className="rounded-circle" width="100px" height="90px"/>
                    </div>
                    <div className="carousel-item">
                        <img src={htmlIcon} className="rounded-circle" width="100px" height="90px"/>
                    </div>
                    <div className="carousel-item">
                        <img src={dockerIcon} className="rounded-circle" width="100px" height="90px"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
}

export default About;
