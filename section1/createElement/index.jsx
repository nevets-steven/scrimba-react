// import { createElement } from 'react'
// import { createRoot } from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))
const reactElement = React.createElement('h1', null, 'Hello from createElement')
console.log(reactElement);
root.render(
    reactElement
)