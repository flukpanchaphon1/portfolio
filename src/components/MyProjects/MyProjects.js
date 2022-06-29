import React, {useState, useEffect, useRef} from 'react'
import './MyProjects.css'
import workData from '../../projects-data'
import WorkDetail from '../WorkDetail/WorkDetail'

const MyProjects = () => {

  const projectRef = useRef();
  const [positionScroll, setPositionScroll]  = useState(0);

  const [dataHover, setDataHover] = useState(0)

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

  // Animation Works
  const [positionOnSection, setPositionOnSection] = useState(0)
  useEffect(() =>{
    const updatePositionWork = () =>{
      positionScroll >  projectRef.current.offsetTop*0.5 ? setPositionOnSection((projectRef.current.offsetTop - positionScroll) / 8) : setPositionOnSection(0)
    }
    window.addEventListener('scroll', updatePositionWork);
    return () =>{
      window.removeEventListener('scroll', updatePositionWork)
    }
  },[positionScroll])

  return (    

    <section id='myProject' ref={projectRef}>
      <WorkDetail src={dataHover} alt="image-preview" />
      <h3 className='section-my-project-title'>MY PROJECTS</h3>
      <div className='frist-container-projects'>
        <div className='container-item' style={{transform: `translateX(${positionOnSection}px)`}}>
          {workData.map((data) => {
            if (data.id > 4) {
              return false;
            }
            else if (data.id % 2 === 0) {
              return (
                <img key={data.id} src={data.src} onMouseEnter={()=>{setDataHover(data.imgHover)}}  onMouseLeave={()=>{setDataHover(0)}} alt={`my-work-${data.id}`} />
              )
            } else {
              return (
                <video onMouseEnter={()=>{setDataHover(data.imgHover)}}  onMouseLeave={()=>{setDataHover(0)}} key={data.id} loop autoPlay muted >
                  <source src={data.src} type="video/mp4" />
                </video>
              )
            }
          })}
        </div>
      </div>
      <div className='last-container-projects'>
        <div className='container-item'  style={{transform: `translateX(-${positionOnSection}px)`}}>
          {workData.map((data) => {
            if (data.id <= 4) {
              return false;
            }
            else if (data.id % 2 === 0) {
              return (
                <video onMouseEnter={()=>{setDataHover(data.imgHover)}}  onMouseLeave={()=>{setDataHover(0)}} key={data.id} loop autoPlay muted >
                <source src={data.src} type="video/mp4" />
              </video>
              )
            } else {
              return (
                 <img key={data.id} onMouseEnter={()=>{setDataHover(data.imgHover)}}  onMouseLeave={()=>{setDataHover(0)}} src={data.src} alt={`my-work-${data.id}`} />
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default MyProjects