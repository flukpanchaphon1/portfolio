import React, { useEffect, useState } from 'react'
import './Header.css'

import Nav from '../Nav/Nav'

const Header = () => {
    const [positionScroll, setPositionScroll]  = useState(0);
    useEffect(()=>{
        const printScroll = () =>{
            setPositionScroll(window.scrollY)
        }
        window.addEventListener('scroll', printScroll)
        return()=>{
            window.removeEventListener('scroll', printScroll)
        }
        
    },[positionScroll])

    return (
        <div id='header' className={positionScroll>50? 'hide': ''}>
            <div id='logo-site'>PANC S.</div>
            <Nav />
        </div>
    )
}

export default Header