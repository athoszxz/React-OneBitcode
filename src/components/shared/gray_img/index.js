import React from "react";
import "./style.css";

const GrayImg = (props) => {
    return (       
    <img src={props.img_url} className={props.gray ? "gray-img" : "color-img"} alt="planet"/> 
    );
}

export default GrayImg;