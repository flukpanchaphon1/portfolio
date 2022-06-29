import React, {useState, useEffect, useRef} from 'react'
import './Contacts.css';
import img from '../../images/profile.jpg'
import myLinkData from '../../socials-data';

const Contacts = () => {
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

  // Animation 
  const sectionContactRef = useRef();
  // const [positionOnSection, setPositionOnSection] = useState(100)

  // useEffect(() =>{
  //   const updatePoisionDiv = () =>{
  //     // positionScroll >  sectionContactRef.current.offsetTop * .7 ? setPositionOnSection(0) : setPositionOnSection(1);
  //     positionScroll >  sectionContactRef.current.offsetTop * .8 ? setPositionOnSection(0) : setPositionOnSection(100);
  //   }
  //   window.addEventListener('scroll', updatePoisionDiv);
  //   return () =>{
  //     window.removeEventListener('scroll', updatePoisionDiv)
  //   }
  // },[positionScroll])


  return (
    <section ref={sectionContactRef} style={{ background: '#1C1C21', position: 'relative', overflow: 'hidden' }}>
      {/* <div className='round-div'  style={{height: `${positionOnSection}%`}}></div> */}
      <h4 className='header-contact'>CONTACT ME</h4>
      <div className='container-contacts'>
        <div>
          <p className='second-header-contact'>Let’s  work together</p>
          <div className='contact-btn'>
            <a href="mailto:flukpanchaphon1@gmail.com">flukpanchaphon1@gmail.com</a>
            <a href="tel:+66980706112">098-0706112</a>
          </div>
          <div className='social-link'>
              {myLinkData.map(data=>{
                return(
                  <a key={data.name} href={data.link}><img src={data.icon} alt={data.name} /></a>
                )
              })}
          </div>
        </div>
        <div className='footer-img'>
          <img src={img} alt="contact-profile"/>
        </div>
      </div>
      <div className='copyright'>
        Design by <a href='https://www.facebook.com/woosanook'><b>Panchaphon Somsan</b></a>
      </div>
    </section>
  )
}

export default Contacts