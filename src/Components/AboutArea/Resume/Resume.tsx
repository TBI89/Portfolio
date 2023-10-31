import "./Resume.css";
import DownloadIcon from '@mui/icons-material/Download';

function Resume(): JSX.Element {
    return (
        <div className="Resume">
            <button className="ResumeButton">Resume <DownloadIcon className="DownloadIcon" /></button>
        </div>
    );
}

export default Resume;
