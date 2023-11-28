import flyAwayProjectImage from "../../../Assets/Images/fly-away-project-image.png";
import smartInvestingProjectImage from "../../../Assets/Images/smart-investing-project-image.png";
import tranzuzProjectImage from "../../../Assets/Images/tranzuz-project-image.png";
import weatherInYourPocketProjectImage from "../../../Assets/Images/weather-in-your-pocket-project-image.png";
import ProjectModel from "../../../Models/ProjectModel";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectList.css";

function ProjectList(): JSX.Element {

    const projects: ProjectModel[] = [
        { id: 1, name: "Tranzuz", imageName: tranzuzProjectImage, url: "https://github.com/TBI89/Tranzuz" },
        { id: 2, name: "FlyAway", imageName: flyAwayProjectImage, url: "https://github.com/TBI89/FlyAway" },
        { id: 3, name: "SmartInvesting", imageName: smartInvestingProjectImage, url: "https://tbi89.github.io/SmartInvesting/" },
        { id: 4, name: "WeatherInYourPocket", imageName: weatherInYourPocketProjectImage, url: "https://weather-in-my-pocket.web.app/home/tel-aviv" }
    ];


    return (
        <div className="ProjectList">
            <h2>My Work</h2>
            {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
    );
}

export default ProjectList;
