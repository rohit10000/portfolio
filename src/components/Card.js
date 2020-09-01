import React from "react";
import "./Card.css";
import CallMadeOutlinedIcon from '@material-ui/icons/CallMadeOutlined';

function Card({src, title, description, tech_stack, link}){
    return (
        <div className="card">
            <div className={"card__header"}>
                <img src={src} alt="" />
                    <a href={link}>
                        <div className="card__header__link">
                            <CallMadeOutlinedIcon style={{ color: "white", fontSize: 40, paddingTop: 5, paddingLeft: 2} } />
                        </div>
                    </a>

            </div>

            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3><strong>Technology Used:</strong> {tech_stack}</h3>
            </div>

        </div>
    );
}

export default Card;
