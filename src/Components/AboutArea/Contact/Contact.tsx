import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./Contact.css";
function Contact(): JSX.Element {

    const phoneNumber = "0504763633";
    const message = "Hello, I am interested in contacting you.";

    return (
        <div className="Contact">

            <h3>Lets Get In Touch</h3>

            <div className="SocialLinks">
                <a href={"https://www.linkedin.com/in/tomer-ben-israel"}
                    target="_blank"><LinkedInIcon /> in/tomer-ben-israel</a>
                <a href={"https://github.com/TBI89"}
                    target="_blank"><GitHubIcon /> github.com/TBI89</a>
                <a href={"mailto:tomerben89@mgail.com"}><EmailIcon /> tomerben89@mgail.com</a>
                <a href={`https://wa.me/${phoneNumber}?text=${message}`}
                    target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> 050-4763633</a>
            </div>

        </div>
    );
}

export default Contact;
