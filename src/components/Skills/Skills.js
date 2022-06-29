import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
// import dataSkills from '../../skills-data'
import skillsData from "../../skills-data";

const Skills = () => {
  const sectionRef = useRef();
  const [showTitle, setShowTitle] = useState(false)
  const [positionScroll, setPositionScroll]  = useState(0);

  // update scroll position
  useEffect(()=>{
      const printScroll = () =>{
          setPositionScroll(window.scrollY)
      }
      window.addEventListener('scroll', printScroll)
      return()=>{
          window.removeEventListener('scroll', printScroll)
      }
  },[positionScroll])

  // Show title section
  useEffect(()=>{
    const activeTitle = () =>{
      positionScroll > sectionRef.current.offsetTop * 0.7 ? setShowTitle(true) : setShowTitle(false);
    }
    window.addEventListener('scroll', activeTitle);

    return () =>{
      window.removeEventListener('scroll', activeTitle);
    }
  },[positionScroll])


  const [secondTitle, setSecondTitle] = useState(false)
  useEffect(()=>{
    const activeSecondTitle = () =>{
      positionScroll > sectionRef.current.offsetTop * 0.8 ? setSecondTitle(true) : setSecondTitle(false);
    }
    
    window.addEventListener('scroll', activeSecondTitle);

    return () =>{
      window.removeEventListener('scroll', activeSecondTitle);
    }
  },[positionScroll])

  return (
    <section ref={sectionRef} style={{ background: "#1C1C21" }}>
      <h2 className={`title-section-skill ${showTitle ? 'active' : ''}`}>Tools & Techs</h2>
      <p className="bg-title" style={{opacity: `${secondTitle ? 1 : 0}`}}>Tools & Techs</p>

      <div className="container-skill">
        <ul>
          {skillsData.map((skill) => {
            return (
              <li key={skill.name}>
                <img src={skill.img} alt={skill.name} />
                {skill.name}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
