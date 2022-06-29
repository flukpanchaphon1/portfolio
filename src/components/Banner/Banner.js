import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div id='banner'>
      <div className='contents-banner'>
        <p>HELLO, I AM</p>
        <p className='main-text-banner'>PANCHAPHON</p>
        <div className='container-jobs'>
          <span className='banner-jobs'>FRONT-END DEVELOPER</span>
        </div>
      </div>
      <div className='banner-image'></div>
    </div>
  )
}

export default Banner