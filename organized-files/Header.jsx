export default function Header(){
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