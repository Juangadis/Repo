import React from 'react'
import Nav from './Nav'

const Header = () => {
    return (
        <header id='layout-header' className='Jorgito'>
            <h1 className='header__title'>Mi E-Commerce je</h1>
            <span class="material-icons">shopping_cart</span>
            <Nav/>
        </header>
    )
}

export default Header