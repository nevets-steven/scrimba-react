//  * Challenge: Set up a React app from scratch again.
//  * This time, try rendering an unordered list with 2-3 list items inside
//  * with why you're excited to be learning React.
//  

// import { createRoot } from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderHTMLjsx = (
    <>
    <h1>Why I Am Excited To Learn React</h1>
        <div>
            <ul>
                <li>I love learning new languages, and testing my limits.</li>
                <li>A lot of jobs need or require React knowlexge</li>
                <li>Enhancing my learning of JS, HTML and CSS</li>
            </ul>
        </div>
    </>
);

root.render(renderHTMLjsx);
