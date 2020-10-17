import React from "react";
import "./photo.css";
import photo1 from "./images/1.jpg";
import photo2 from "./images/2.jpg";
import photo3 from "./images/3.jpg";
import photo4 from "./images/4.jpg";
import photo5 from "./images/5.jpg";
import photo6 from "./images/6.jpg";

const Photo = () => {
    return(
        <div className="photo">
            <div className="photo__wrapper">
                <div className="photo__item">
                    <img src={photo1} alt="" className="photo__images"/>
                    <img src={photo2} alt="" className="photo__images"/>
                    <img src={photo3} alt="" className="photo__images"/>
                </div>
                <div className="photo__item">
                    <img src={photo4} alt="" className="photo__images"/>
                    <img src={photo5} alt="" className="photo__images"/>
                    <img src={photo6} alt="" className="photo__images"/>
                </div>

            </div>
        </div>
    )
}

export default Photo;