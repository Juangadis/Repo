import React from 'react'

const Main = ({nombre:[uno,dos,tres]}) => {

    // console.log(props.nombre)
    // console.log(props.edad)
    // const {nombre, edad} = props

    return (
            <main>
                <h2>Bienvenido {uno}!</h2>
                {/* <p>Tu edad es {edad} años</p> */}
            </main>
    )
}

export default Main