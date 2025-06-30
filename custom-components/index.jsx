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


function Header(){
    return (
        <React.Fragment>
            <header id="header">
                <img src="react-logo.png" alt="React Logo" width='40px'/>
                <h1 className="heading">Reasons I'm excited to learn React</h1>
            </header>
        </React.Fragment>
    )
}

function MainContent() {
    return(
        <React.Fragment>
        <section id="ordered-list">
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