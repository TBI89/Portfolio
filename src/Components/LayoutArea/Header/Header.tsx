import { useEffect, useState } from "react";
import "./Header.css";

function Header(): JSX.Element {

    const [displayedText, setDisplayedText] = useState<string>(""); // State for typing effect.
    const [randomContentState, setRandomContentState] = useState<string>(""); // State for random content.
    const [animate, setAnimate] = useState<boolean>(false);

    // Initial content for typing effect:
    const initialContent = "Hi, I'm Tomer. I'm super passionate about...";
    const content = ["web development", "creating top-notch apps", "expanding my tech stack", "problem solving"];

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index <= initialContent.length) { // Start the typing effect on mount.
                setDisplayedText(initialContent.slice(0, index));
                index++;
            } else {
                clearInterval(typingInterval); // Stop the interval all the initialContent displays.
                const randomContentInterval = setInterval(() => { // Start displaying the random content.
                    const randomIndex = Math.floor(Math.random() * content.length);
                    setRandomContentState(content[randomIndex]);
                    setAnimate(true);
                }, 2000);
                return () => clearInterval(randomContentInterval);
            }
        }, 75);

        return () => {
            clearInterval(typingInterval);
        };
    }, []);

    useEffect(() => {
        if (animate) {
            const animationTimeout = setTimeout(() => {
                setAnimate(false);
            }, 1500);
            return () => clearTimeout(animationTimeout);
        }
    }, [animate]);

    return (
        <div className="Header">
            <div className="InitialContent">
                <h1>{displayedText}</h1>
            </div>
            <div className={`RandomContent ${animate ? 'randomContentAnimation' : ''}`}>
                <h1>{randomContentState}</h1>
            </div>
        </div>
    );
}

export default Header;
