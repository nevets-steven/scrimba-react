// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

//Declarative React

// root.render(
//     <h1>Hello, React!</h1>
// )


/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this.
    
*/

// Imperative JS coding
const root = document.getElementById('root');
const header = document.createElement("h1");
header.textContent = "Vanilla JS";
header.className = "header";
root.appendChild(header);