import React from "react";
import "./Header.css";
import Button from "./Button";
import {Link} from "react-router-dom";

function Header(){
    return (
        <div className="header">
            <Link to={"/"}>
                <img className="header__icon"
                     src={require("../images/signature.png")}
                     alt="error"
                />
            </Link>
            <div className="header__button">
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

export default Header;
