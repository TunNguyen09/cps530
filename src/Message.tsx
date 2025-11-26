import { Fragment } from 'react';
import './Message.css'

function Message() {
    return (
        <Fragment>
            <div className="message">
                <h3>How I install this library:</h3>
                <p>I started with installing in terminal using this command, npm create vite@latest.
                Then I selected React and Typescript as my framework and variant. After that I navigated into the project folder and ran npm install to install all dependencies.
                Finally, I ran npm run dev to start the development server.
                </p>
            </div>

            <div className="message">
                <h3>How I built this page using React:</h3>
                <p>I built this page using React as a component-based library. The page structure is organized as functional components:
                an App component that serves as the main entry point, and a Message component that displays the content sections.
                Each section (Installation, Problems Faced, etc.) is rendered within Fragment wrappers to group related content without adding extra DOM nodes.
                I styled the page using a separate CSS file (Message.css) and used React's built-in Fragment from the 'react' package to organize multiple elements semantically.
                The component is then exported as the default export, allowing it to be imported and used in the main component.
                I bundled everything using Vite, which provides fast hot module replacement (HMR) during development.
                </p>
            </div>

            <div className="message">
                <h3>What problems I faced:</h3>
                <p>One problem I faced was setting up the development environment correctly. I had to ensure that I had the right versions of Node.js and npm installed.
                Additionally, I encountered some issues with TypeScript configurations, which required me to adjust the tsconfig.json file to suit my project's needs.
                I also had to take some time to familiarize myself with the Vite build tool and its configuration options.
                After that, I tried to host the lab on Github and it took me some time to figure out how to do that properly.
                </p>
            </div>
        </Fragment>
    ) 
}

export default Message;