import React from 'react'
import './Sidebar.css'

const Sidebar = ({display}) => {

  return (
    <div id='sidebar' className={display ? 'active' : ''}>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SKILLS</li>
        <li>PROJECTS</li>
        <li>CONTACTS</li>
      </ul>
    </div>
  )
}

export default Sidebar