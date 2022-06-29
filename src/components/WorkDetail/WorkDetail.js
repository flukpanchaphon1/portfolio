import React, {useState, useEffect} from 'react'
import './WorkDetail.css'

const WorkDetail = ({ src, alt }) => {

    const [x, setX] = useState();
  const [y, setY] = useState();

  useEffect(() => {
    const update = (e) => {
      setX(e.x);
      setY(e.y);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);

    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [setX, setY]);

    if (src !== 0) {
        return (
            <div  style={{ left: `${x}px`, top: `${y}px`}} id='data-work-hover'>
                <img src={src} alt={alt} />
            </div>
        )
    }
}

export default WorkDetail