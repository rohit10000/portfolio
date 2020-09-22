import React, {useEffect, useState} from "react";
import "./Footer.css";
import {Link} from "react-router-dom";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

function Footer(){

    const [page, setPage] = useState();

    useEffect(()=>{
        let loc = window.location.pathname;
        if(loc == '/')
            setPage(1);
        else if(loc == '/resume')
            setPage(2);
        else if(loc == '/projects')
            setPage(3);
        else
            setPage(4);

    }, []);

    return(
        <div className="footer">
            <div className="footer__quote">
                <FormatQuoteIcon style={{fontWeight: "lighter", fontSize: "larger", color: "grey"}}/>
                <p> Wonderful digital things and <br/>
                a pinch of rock n' roll.</p>
            </div>
            <div className="footer__button">
                <Link to={"/"}>
                    <button id={"profile"} className={"button"} style={
                        page == 1 ? {color: "#a1396e", cursor:"pointer"}: {color: "black", cursor:"pointer"}
                    }>
                        PROFILE
                    </button>
                </Link>
                <Link to={"/resume"}>
                    <button id={"resume"} className={"button"} style={
                        page == 2 ? {color: "#a1396e", cursor:"pointer"}: {color: "black", cursor:"pointer"}
                    }>
                        RESUME
                    </button>
                </Link>
                <Link to={"/projects"}>
                    <button id={"project"} className={"button"} style={
                        page == 3 ? {color: "#a1396e", cursor:"pointer"}: {color: "black", cursor:"pointer"}
                    }>
                        PROJECTS
                    </button>
                </Link>
                <Link to={"/contact"}>
                    <button id={"contact"} className={"button"} style={
                        page == 4 ? {color: "#a1396e", cursor:"pointer"}: {color: "black", cursor:"pointer"}
                    }>
                        CONTACT
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default Footer;
