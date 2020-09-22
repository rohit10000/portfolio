import React, {useEffect, useState} from "react";
import "./Header.css";
import {NavLink, Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

const useStyles = makeStyles({
    button: {
        margin: "5px",
        textDecoration: "none",
        fontFamily: "Nora's",
        fontStyle: "italic",
        '&:hover': {
            color: "#A1396E",
        }
    }
});

function Header(){
    return (
        <div className="header">
            <a href="/">
            <img className="header__icon" src={require("../images/signature.png")} alt="error"/>
            </a>
            <div className="header__button">
                <a href="/">
                    <button id="profile" className="button_">PROFILE</button>
                </a>
                <a href="/resume">
                    <button id="resume" className="button_">RESUME</button>
                </a>
                <a href="/projects">
                    <button id="project" className="button_">PROJECTS</button>
                </a>
                <a href="/contact">
                    <button id="contact" className="button_">CONTACT</button>
                </a>
            </div>
        </div>
    );
}

export default Header;


