import bootstrapIcon from "../../../Assets/Images/bootstrap-icon.png";
import cssIcon from "../../../Assets/Images/css-icon.png";
import dockerIcon from "../../../Assets/Images/docker-icon.png";
import flyAwayProjectImage from "../../../Assets/Images/fly-away-project-image.png";
import htmlIcon from "../../../Assets/Images/html-icon.png";
import javascriptIcon from "../../../Assets/Images/javascript-icon.png";
import mongoIcon from "../../../Assets/Images/mongo-icon.png";
import nodeIcon from "../../../Assets/Images/node-icon.png";
import reactIcon from "../../../Assets/Images/react-icon.png";
import smartInvestingProjectImage from "../../../Assets/Images/smart-investing-project-image.png";
import sqlIcon from "../../../Assets/Images/sql-icon.png";
import tranzuzProjectImage from "../../../Assets/Images/tranzuz-project-image.png";
import typescriptIcon from "../../../Assets/Images/typescript-icon.png";
import weatherInYourPocketProjectImage from "../../../Assets/Images/weather-in-your-pocket-project-image.png";
import ProjectModel from "../../../Models/ProjectModel";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectList.css";
import tubroTexterProjectImage from "../../../Assets/Images/turbo-texter-project-image.png";

function ProjectList(): JSX.Element {

    const projects: ProjectModel[] = [
        {
            id: 1,
            name: "Tranzuz",
            imageName: tranzuzProjectImage, url: "https://github.com/TBI89/Tranzuz",
            description: "A pre-salary system for bus drivers that monitors information about the quantity and quality of the drivers' work",
            tags: [mongoIcon, nodeIcon, typescriptIcon, reactIcon, bootstrapIcon]
        },
        {
            id: 2,
            name: "Fly Away",
            imageName: flyAwayProjectImage,
            url: "https://github.com/TBI89/FlyAway",
            description: "SPA application for managing and tracking vacations that allows the creation, editing, and display of detailed information about vacations in the system and more.",
            tags: [sqlIcon, nodeIcon, typescriptIcon, reactIcon, bootstrapIcon, dockerIcon]
        },
        {
            id: 3,
            name: "Smart Investing",
            imageName: smartInvestingProjectImage,
            url: "https://tbi89.github.io/SmartInvesting/",
            description: "An easy and responsive application that provides access to up-to-date information about thousands of virtual currencies in the crypto market.",
            tags: [javascriptIcon, htmlIcon, cssIcon, bootstrapIcon]
        },
        {
            id: 4,
            name: "Weather In Your Pocket",
            imageName: weatherInYourPocketProjectImage,
            url: "https://weather-in-my-pocket.web.app/home/tel-aviv",
            description: "An application for displaying and monitoring worldwide weather conditions with an intuitive and simple interface",
            tags: [typescriptIcon, reactIcon, bootstrapIcon]
        },
        {
            id: 5,
            name: "Turbo Texter",
            imageName: tubroTexterProjectImage,
            url: "https://turbo-texter.web.app/",
            description: "A fun typing speed test game. monitor your WPM, CPM, and accuracy. After the test, enjoy superhero-themed feedback and share your results!",
            tags: [typescriptIcon, reactIcon, htmlIcon, cssIcon, bootstrapIcon]
        }
    ];


    return (
        <div className="ProjectList">
            <h2>My Work</h2>
            {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
    );
}

export default ProjectList;
