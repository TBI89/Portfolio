import DownloadIcon from '@mui/icons-material/Download';
import "./Resume.css";

function Resume(): JSX.Element {

    // Handle file download:
    function handleResumeDownload() {

        const pdfUrl = "https://drive.google.com/uc?export=download&id=1hU8e6DQ0C8YMwc0zhii2ziRnajNvelGS";
        const link = document.createElement("a"); // Temporary download link.
        link.href = pdfUrl;
        link.download = "CV - Tomer Ben Israel - Full Stack Developer"; // File name.
        link.target = "_blank"; // Open in a new tab.
        document.body.appendChild(link); // Add the element to the HTML document.
        link.click(); // Trigger download on click.
        document.body.removeChild(link); // Remove the "a" element after download.

    }
    return (
        <div className="Resume">
            <button className="ResumeButton"
                onClick={handleResumeDownload}>Resume <DownloadIcon className="DownloadIcon" /></button>
        </div>
    );
}

export default Resume;
