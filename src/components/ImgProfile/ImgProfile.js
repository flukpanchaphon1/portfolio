import React, { useEffect, useState } from "react";
import "./ImgProfile.css";
import img from "../../images/profile.jpg";
import glass from "../../images/glasses.png";

const ImgProfile = () => {
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

  
  // Hide and show cursor
  const [display, setDisplay] = useState(false)
  const hideShowCursor = () => setDisplay(!display);

  useEffect(() =>{

  }, [])


  return (
    <div className="containerProfile" onMouseEnter={hideShowCursor} onMouseLeave={hideShowCursor}>
      <img
        id="mycursor"
        src={glass}
        alt="cursor"
        style={{ left: `${x}px`, top: `${y}px`, display: `${display ? 'block' : 'none'}`}}
      />
      <img src={img} className="myProfile" alt="Panchaphon" />
      <button className="dl-cv">DOWNLOAD CV</button>
    </div>
  );
};

export default ImgProfile;
