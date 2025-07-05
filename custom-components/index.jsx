// import { Fragment } from "react"


const root = ReactDOM.createRoot(document.getElementById('root'))
/** Mini Challenge:
 * 
 * Move the `header` element from the Page component into 
 * its own component called "Header"
 * 
 * Then render an instance of the Header component inside
 * the Page component where the `header` used to be.
 */


/** Challenge: 
 * Move the `main` (section) element into its own component called "MainContent" 
 * and render that component inside the Page component.
 * 
 * Do the same with the `footer` element, moving it into a new
 * component called "Footer"
*/


/**
 * Challenge:
 * 
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 */


//  * Challenge:
//  * 
//  * Using flexbox, line up the `li`s horizontally and put them inline
//  * with the React logo.
//  * 
//  * NOTE: for practice's sake, don't select any
//  * elements, but use classes for all styling.
//  */


/**
 * Challenge:
 * 
 * Move the `width` style off the JSX and into CSS with a dedicated
 * className on the img element, and change the width to 55px instead
 */


function Header(){
    return (
        <React.Fragment>
            <header id="header">
                <img src="react-logo.png" alt="React Logo" id="logo"/>
                <nav className="nav">
                    <ul className="nav-list"> 
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    )
}

function MainContent() {
    return(
        <React.Fragment>
        <section id="ordered-list">
            <h1 className="heading">Reasons I'm excited to learn React</h1>
            <ol className="list">
                <li className="list-item">I love learning</li>
                <li className="list-item">React is in demand</li>
                <li className="list-item">I find this fun</li>
            </ol>
        </section>
        </React.Fragment>
    )
}

function Footer(){
    return (
        <React.Fragment>
            <footer id="footer">
                <p>© 2025 Frederick development. All rights reserved.</p>
            </footer>
        </React.Fragment>

    )
}
function Page() {
    return (
        <React.Fragment>
            <Header />
            <MainContent />
            <Footer />
            
            
        </React.Fragment>
    )
}

root.render(
    <Page />
)