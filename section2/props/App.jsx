/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */
// import Contact from "Contact"

function App() {
    return (
        <div className="contacts">
            <Contact 
                img="https://picsum.photos/200"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"/>
            <Contact 
                img="https://picsum.photos/200"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"/>
            <Contact 
                img="https://picsum.photos/200"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"/>
            <Contact 
                img="https://picsum.photos/200"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"/>

        </div>
    )
}

// export default App