import React from "react";
import "./Footer.css";
import Button from "./Button";
import {Link} from "react-router-dom";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

function Footer(){
    return(
        <div className="footer">
            <div className="footer__quote">
                <FormatQuoteIcon style={{fontWeight: "lighter", fontSize: "larger", color: "grey"}}/>
                <p> Wonderful digital things and <br/>
                a pinch of rock n' roll.</p>
            </div>
            <div className="footer__button">
                <Link to={"/"}>
                    <Button text = {"PROFILE"} />
                </Link>
                <Link to={"/resume"}>
                    <Button text = {"RESUME"} />
                </Link>
                <Link to={"/projects"}>
                    <Button text = {"PROJECTS"} />
                </Link>
                <Link to={"/contact"}>
                    <Button text = {"CONTACT"} />
                </Link>
            </div>
        </div>
    );
}
export default Footer;
