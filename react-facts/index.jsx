/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding more styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="react-logo.png"` in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

// import createRoot from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))
const markup =

<main id="main">
    <img src="react-logo.png" alt="" id="logo" />
    <section id="fun-facts">
        <h1>Fun Facts About React</h1>
        <ul className="facts-list">
            <li className="facts-list-item">Was first released in 2013</li>
            <li className="facts-list-item">Was originally created by Jordan Walke</li>
            <li className="facts-list-item">Has well over 100K stars on Github</li>
            <li className="facts-list-item">Is maintained by Meta</li>
            <li className="facts-list-item">Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </section>
</main>

root.render(
    markup
)