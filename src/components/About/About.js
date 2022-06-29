import React, { useEffect, useRef, useState } from "react";
import "./About.css";

import ImgProfile from "../ImgProfile/ImgProfile"

const About = () => {

  const [scroll, setScroll] = useState()

  useEffect(()=>{
    function updateScroll(){
      setScroll(window.scrollY);
    }
    window.addEventListener('scroll', updateScroll)
    return () =>{
      window.removeEventListener('scroll', updateScroll)
    }
  },[scroll])
  
  const positionRef = useRef();

  const [displayBasedIn, setDisplayBasedIn] = useState(false);

  useEffect(()=>{
    function showtext(){
      if(scroll > positionRef.current.offsetTop){
        setDisplayBasedIn(true)
      }else{
        setDisplayBasedIn(false)
      }
    }

      window.addEventListener('scroll', showtext);
      return() =>{
        window.removeEventListener('scroll', showtext)
      }
  }, [scroll])

  // const [x, setX] = useState(0)

  // useEffect(()=>{
  //   console.log(positionRef.current.offsetTop)

  //   function showtext(){
  //     if(scroll > positionRef.current.offsetTop){
  //       setX(1)
  //     }else{
  //       setX(1)
  //     }
  //   }

  //   window.addEventListener('scroll', showtext);

  //   return () =>{
  //     window.removeEventListener('scroll', showtext);
  //   }
  // },[scroll])

  return (
    <section style={{marginBottom: '5rem', overflow: 'hidden'}} ref={positionRef}>
      <h1 className="title-section" style={{marginBottom: '2.5em'}}>ABOUT ME</h1>
      {/* <p className="fname" style={{right: `${scroll/1.5}px`}}>PANCHAPHON</p>
      <p className="lname" style={{left: `${scroll*1.5}px`}}>SOMSAN</p> */}
      <p className="fname" style={{right: `${scroll/1.8}px`}}>PANCHAPHON</p>
      <p className="lname" style={{left: `${scroll*1.2}px`}}>SOMSAN</p>

      <p className="jobs">FRONT-END DEVELOPER</p>
      <p className={`based-in ${displayBasedIn ? 'active' : ''}`}>BASED IN<br />THAILAND</p>
      <p className="container-desc">
        I live in Phitsanulok.
        <br />
        23 years old
        <br />
        Email: flukpanchaphon1@gmail.com
        <br />
        Phone: 098-0706112
      </p>
      <ImgProfile />
      <p className="bg-txt" style={{right: `-${scroll/10}px`}}>ABOUT ME</p>
    </section>
  );
};

export default About;
