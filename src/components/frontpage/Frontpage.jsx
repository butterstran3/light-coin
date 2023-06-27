import React from "react";
import "./frontpage.css";
import image from "../../assets/light.png";
import text from "../../assets/text.png";

const Frontpage = () => {
    return (
        <div className="frontpage_container">
            <div className="front-image_container">
                <img src={image} className="front_image"></img>
                <img src={text} className="text_image"></img>
            </div>
            <div className="front-content_container">
                <h2>Fair Launch.</h2>
                <h2>No Twitter Blue, No Problem.</h2>
            </div>
            <div className="front-btn_container">
                <button className="black_btn">CHART</button>
                <button className="white_btn">BUY $L ON UNISWAP</button>
            </div>
        </div>
    )
}

export default Frontpage;