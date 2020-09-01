import React from "react";
import "./Banner.css";

function Banner(){
    return(
        <div className="banner__container">
            <div className="banner">
                <div className="banner__header">
                    <div className="banner__header__hi">
                        <p>Hi,</p>
                    </div>
                    <br/>
                    <div className="banner__header__intro">
                        <h3>I'm </h3> <h2> Rohit Singh</h2>,<h3>  a creative developer.</h3>
                    </div>
                </div>

                <hr/>

                <div className="banner__content">
                    <img className="my_photo"
                         src={require("../images/my_photo.JPG")}
                         alt=""
                    />
                    <div className="banner__content__text">
                        <h3>About me</h3>
                        <p>
                            I am a recently pass out postgraduate in Information Technolgy
                            from ABV-Indian Institute of Information Technolgy and Management, Gwalior.
                            <br/>
                            I have a keen interest in coding and development. Following my interest,
                            I have done several development-related projects. I'm a team player with high
                            will power, motivated, patience and always add positivity in the team.
                            <br/>
                            Currently, I am searching for a place where I can apply my knowledge in the
                            practical world. Thus, enhancing my experience and benefiting the organization.
                        </p>
                    </div>

                    <div className="banner__content__details">
                        <h3>Details</h3>
                        <h4>Name:</h4>
                        <p>Rohit Singh</p>
                        <h4>Email:</h4>
                        <p>rohitsingh18997@gmail.com</p>
                        <h4>LinkedIn:</h4>
                        <p>@rohit-singh997</p>
                        <h4>Location:</h4>
                        <p>India, Earth.</p>

                    </div>

                </div>
            </div>

        </div>
    );
}
export default Banner;
