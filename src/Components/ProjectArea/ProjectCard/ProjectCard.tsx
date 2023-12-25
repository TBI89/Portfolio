import { useEffect, useState } from "react";
import ProjectModel from "../../../Models/ProjectModel";
import Spinner from "../../SharedArea/Spinner/Spinner";
import "./ProjectCard.css";
import LinkIcon from '@mui/icons-material/Link';

interface ProjectCardProps {
    project: ProjectModel
}

function ProjectCard(props: ProjectCardProps): JSX.Element {

    const [isCardLoaded, setIsCardLoaded] = useState(false);

    useEffect(() => {
        setIsCardLoaded(true);
    }, []);

    return (
        <div className="ProjectCard">

            {!isCardLoaded && <Spinner />}

            {isCardLoaded && (
                <div className="ProjectContainer">
                    <a href={props.project.url} target="_blank"><LinkIcon fontSize="large" /></a>
                    <img className="ProjectImage" src={props.project.imageName} />
                    <h3>{props.project.name}</h3>
                    <p>{props.project.description}</p>
                    <div className="TagsContainer">
                        {props.project.tags.map((tag, index) => (
                            <img key={index} src={tag} alt={`Tag ${index}`} className="rounded-circle" />
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
}

export default ProjectCard;
