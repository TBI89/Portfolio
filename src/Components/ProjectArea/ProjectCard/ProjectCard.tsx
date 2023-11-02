import ProjectModel from "../../../Models/ProjectModel";
import "./ProjectCard.css";

interface ProjectCardProps {
    project: ProjectModel
}

function ProjectCard(props: ProjectCardProps): JSX.Element {

    return (
        <div className="ProjectCard">
            <a className="ProjectLink" href={props.project.url} target="_blank">
                <div className="ProjectInfoContainer">
                    <span className="ProjectPropPlaceholder">{props.project.id}</span>
                    <br />
                    <span className="ProjectPropPlaceholder">{props.project.name}</span>
                </div>

                <div className="ProjectImageContainer">
                    <img className="ProjectImage" src={props.project.imageName} />
                </div>
            </a>
        </div>
    );
}

export default ProjectCard;
