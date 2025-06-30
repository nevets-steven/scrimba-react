// import createRoot from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <TemporaryName />
)

root.render(
    <Page />
)

function TemporaryName() {
    return (
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
    )

}


/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

function Page() {
    return (
        <main>
            <header id="header">
                <img src="react-logo.png" alt="React Logo" width='40px'/>
                <h1 className="heading">Reasons I'm excited to learn React</h1>
            </header>
            <section id="ordered-list">
                <ol className="list">
                    <li className="list-item">I love learning</li>
                    <li className="list-item">React is in demand</li>
                    <li className="list-item">I find this fun</li>
                </ol>
            </section>
        </main>
        
    )
}

/**
Challenge: 

Part 2: 
- Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
- Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well.
- Add a `<footer>` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

