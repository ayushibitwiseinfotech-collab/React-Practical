import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx} from 'react/jsx-runtime.js'

import App from './App.jsx'

function MyApp() {
    return(
        <div>
            <h1>Custom App !</h1>
        </div>
    )

}
/*const ReactElement = {
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'  
    },
     children:'Click me to visit google'
} */

const anotherElement = (
    <a href="https://www.google.com" target="_blank">
        visit google
    </a>
)

const anotherUser="Ayushi"

const reactElement = React.createElement(
    'a',
    {href: 'https://www.google.com',target: '_blank'},
    'Click me to visit google',
    anotherElement,
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement
 
)
