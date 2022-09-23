import ReactDOM from "react-dom"
import React from "react"
import {Header} from "./Components/Header.js" 
import {MainComponent} from "./Components/MainComponent.js"
import {Footer} from "./Components/Footer.js"

function CustomComponent(){
    return(
        <div>
            <Header />
            <MainComponent />
            <Footer />
        </div>
    )
}
ReactDOM.render(<CustomComponent />,document.getElementById('root'))
