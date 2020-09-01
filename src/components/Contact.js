import React from "react";
import "./Contact.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import {Link} from "react-router-dom";

function Contact(){
    return(
        <div className="contact__container">
            <div className="contact">
                <div className="contact__title">
                    <p>Contact</p>
                </div>
                <div className="contact__quote">
                    <div className="contact__quote__text">
                        <p>"Good, better, best. Never let it rest. Till your good is better and better is best. "</p>
                    </div>
                    <div className="contact__quote__author">
                        <p>- St. Jerome</p>
                    </div>
                </div>

                <hr/>

                <div className="contact__social">
                    <div className="contact__social__content">

                        <div className="contact__social__content__link">
                            <LinkedInIcon fontSize={"large"}/>
                            <p className="link">https://www.linkedin.com/in/rohit-singh997</p>
                        </div>
                        <div className="contact__social__content__link">
                            <MailIcon fontSize={"large"}/>
                            <p className="link">rohitsingh18997@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact__social__content">
                        <div className="contact__social__content__link">
                            <GitHubIcon fontSize={"large"}/>
                            <p className="link">https://github.com/rohit10000</p>
                        </div>

                        <div className="contact__social__content__link">
                            <AlternateEmailIcon fontSize={"large"}/>
                            <p className="link">rohitsinghiiitm.com</p>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="contact__button">

                </div>
            </div>
        </div>
    );
}

export default Contact;
