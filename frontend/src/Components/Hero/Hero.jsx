import React from 'react';
import './Hero.css';
import hero from '../../Assets/b_hero2.png';



function Hero() {

    return (
        <>
            <div className="hero" id="home">

                <div className="left">
                    <h1 className='text-capitalize' style={{ color: "121b22", width: "99%" }}>Boundless Security, Infinite Trust</h1>
                    <div className="para" style={{ width: "95%", textAlign: "justify" }} >
                        <p>Welcome to <span style={{ textShadow: "0.25px 0.25px 0.25px #121b22" }}>Codefinity</span>, where we are redefining cybersecurity with AI-driven, smart security assessments. Our mission is to empower organizations with intelligent solutions that provide proactive, privacy-centered protection. By blending advanced AI technology with a commitment to trust and transparency, we deliver security solutions that anticipate threats, safeguard data, and build enduring confidence in an ever-evolving digital landscape.
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

