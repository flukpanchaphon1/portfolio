import React, { useEffect, useState } from 'react'
import './Toggle.css'

import Sidebar from "../Sidebar/Sidebar"

const Toggle = () => {

    const [toggle, setToggle] = useState(false);
    const switchToggle = () => setToggle(!toggle);

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
        <div id='toggle' className={positionScroll>50? '': 'hide'}>
            <div id="hamburger" onClick={switchToggle} className={toggle ? 'active' : ''}>
                <div></div>
                <div></div>
            </div>
            
            <Sidebar display={toggle} />
        </div>
    )
}

export default Toggle