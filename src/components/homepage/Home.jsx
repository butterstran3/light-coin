import React from "react";
import './home.css';
import Frontpage from "../frontpage/Frontpage";
import Content from "../content/Content";
import Quote from "../quote/Quote";

const Home = () => {
    return (
        <div className="home_container">
            <Frontpage/>
            <Quote />
            <Content />
        </div>
    )
}

export default Home;