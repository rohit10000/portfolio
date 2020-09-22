import React, {useEffect, useState} from "react";
import "./Header.css";
import {useStateValue} from "../contextApi/StateProvider";

function Header(){
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

    return (
        <div className="header">
            <a href="/">
            <img className="header__icon" src={require("../images/signature.png")} alt="error"/>
            </a>
            <div className="header__button">
                <a href="/">
                    <button id="profile" className="button_" style={
                        page === 1 ? {color: "#a1396e", cursor:"pointer"}: {color: "black", cursor:"pointer"}
                    }
                    >
                        PROFILE
                    </button>
                </a>
                <a href="/resume">
                    <button id="resume" className="button_" style={
                        page === 2 ? {color: "#a1396e", cursor:"pointer"}: {color: "black", cursor:"pointer"}
                    }>
                        RESUME
                    </button>
                </a>
                <a href="/projects">
                    <button id="project" className="button_" style={
                        page === 3 ? {color: "#a1396e", cursor:"pointer"}: {color: "black", cursor:"pointer"}
                    }>PROJECTS</button>
                </a>
                <a href="/contact">
                    <button id="contact" className="button_" style={
                        page === 4 ? {color: "#a1396e", cursor:"pointer"}: {color: "black", cursor:"pointer"}
                    }>CONTACT</button>
                </a>
            </div>
        </div>
    );
}

export default Header;


