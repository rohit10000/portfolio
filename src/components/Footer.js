import React from "react";
import "./Footer.css";
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
                    <button id={"profile"} className={"button"}>
                        PROFILE
                    </button>
                </Link>
                <Link to={"/resume"}>
                    <button id={"resume"} className={"button"}>
                        RESUME
                    </button>
                </Link>
                <Link to={"/projects"}>
                    <button id={"project"} className={"button"}>
                        PROJECTS
                    </button>
                </Link>
                <Link to={"/contact"}>
                    <button id={"contact"} className={"button"}>
                        CONTACT
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default Footer;
