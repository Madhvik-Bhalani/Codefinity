import React from 'react';
import './Hero.css';
import hero from '../../Assets/b_hero2.png';



function Hero() {

    return (
        <>
            <div className="hero" id="home">

                <div className="left">
                    <h1 className='text-capitalize' style={{ color: "121b22", width: "99%" }}>Transforming Ideas with AI Innovation</h1>
                    <div className="para" style={{ width: "95%", textAlign: "justify" }} >
                        <p>Welcome to <span style={{ textShadow: "0.25px 0.25px 0.25px #121b22" }}>Codefinity</span>, your hub for AI-driven solutions. As a team of passionate developers, we are building projects that push the boundaries of artificial intelligence. Join us as we explore new horizons in technology and make a difference in the digital world.
                        </p>
                    </div>
                    <div className="btns">
                        <a href="#contact" style={{textDecoration:"none"}}>

                            <button className=" text-capitalize btn" style={{
                                background: "linear-gradient(172deg, #1296DF 6.23%, #1F5B7C 131.99%, #22506A 146.31%, #292F32 165.42%)",
                                color: "white", fontSize: "19px"
                            }} >Get Started</button>
                        </a>
                    </div>
                </div>

                <div className="right">
                    <img src={hero} alt="Home Page.." />
                </div>
            </div>
        </>
    )
}

export default Hero

