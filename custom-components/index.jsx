// import { Fragment } from "react"


const root = ReactDOM.createRoot(document.getElementById('root'))

function Page() {
    return (
        <React.Fragment>
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
            <footer id="footer">
                <p>© 2025 Frederick development. All rights reserved.</p>
            </footer>
        </React.Fragment>
    )
}

root.render(
    <Page />
)