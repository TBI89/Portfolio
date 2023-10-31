import "./Footer.css";

function Footer(): JSX.Element {

    const currentYear = new Date().getFullYear();
    return (
        <div className="Footer">
            <p>© {currentYear} Tomer Ben Israel - All rights reserved</p>
        </div>
    );
}

export default Footer;
