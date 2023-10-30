import { useEffect, useState } from "react";
import "./Header.css";

function Header(): JSX.Element {
    
    const [displayedText, setDisplayedText] = useState<string>(""); // State for typing effect
    const [randomContentState, setRandomContentState] = useState<string>(""); // State for random content

    // Initial content for typing effect
    const initialContent = "Hi, I'm Tomer. I'm super passionate about ";
    const content = ["web development.", "creating top-notch apps.", "expanding my tech stack."];

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
                }, 2000);
                return () => clearInterval(randomContentInterval);
            }
        }, 75);

        return () => {
            clearInterval(typingInterval);
        };
    }, []);

    return (
        <div className="Header">
            <h1>{displayedText}<br />{randomContentState}</h1>
        </div>
    );
}

export default Header;
