import React from "react";
import "./content.css";

const Content = () => {
    return (
        <div className="content_container">
            <div className="content_info">
                <div className="content">
                    <h3>What is $L?</h3>
                    <p>
                        $L is the first airdrop that rewards you for your Twitter usage: all Twitter Blue subscribers are eligible, and the more clout you have, the bigger your airdrop. 
                        $L is made up of true Elon believers: $L not only supports Elon by encouraging Twitter Blue subscribers, but also builds a community of genuine, non-bot supporters.
                    </p>
                </div>
                <div className="content">
                    <h3>What is the $L origin story?</h3>
                    <p>
                        Elon tweeted in 2021 he likes Death Note and prefers L from Death Note. 
                        The $L community has come together to support Elon Musk and his various ventures. 
                        That is why $L will be airdropped to every Twitter Blue subscriber; the project aims to incentivize more people to subscribe to Twitter Blue to support Elon!
                    </p>
                </div>
            </div>
            <div className="content_table">
                <div className="table">
                    <h2 className="table_title">TOKENOMICS</h2>
                    <div className="table_data">
                        <h1>1 Trillion</h1>
                        <p>$EVERMARS Supply</p>
                    </div>
                    <div className="table_data">
                        <h1>5% Buy Tax</h1>
                        <p>Reflections - 3%</p>
                        <p>Marketing/Development - 2%</p>
                    </div>
                    <div className="table_data">
                        <h1>5% Sell Tax</h1>
                        <p>Reflections - 3%</p>
                        <p>Marketing/Development - 2%</p>
                    </div>
                    <div className="table_data">
                        <h1>5% Buy Tax</h1>
                        <p>view burn TX</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;