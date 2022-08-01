import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

const App = () => {

    // const persona = {
    //     nombre: "Juan",
    //     edad: "24"
    // }

    return (
        <>
            <Header/>
            {/* <Main nombre="Juan" edad="24"/>  */}
            <Main nombre={["uno","dos","tres"]}/> 
            <Footer/>
        </>
    )
}

export default App 