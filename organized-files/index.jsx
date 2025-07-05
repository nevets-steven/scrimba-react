
const root = ReactDOM.createRoot(document.getElementById('root'))
// import Header from './Header.jsx'
// import MainContent from "./MainContent"
// import Footer from "./Footer"

//since i am using a local environment with liveserver, i have to import using script in html file


/**
 * Challenge: move the MainContent and Footer components to their own
 * separate files.
 */





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