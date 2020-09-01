import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import "./Project.css";

function Project(){
    return (
        <div>
            <Header/>
            <div className="project__section">
                <Card src={require("../images/gometech.png")}
                      title={"Gometech"}
                      description={"A fully functional, regular, real-time, responsive website for " +
                      "residence booking in Varanasi. It uses the Google Map API to get the area " +
                      "wise rent search."}
                      tech_stack={"NodeJs, MongoDB, HTML, CSS, Bootstrap, Javascript."}
                      link={"https://gometech.herokuapp.com/"}
                />
                <Card src={require("../images/gamesumo.png")}
                      title={"Gamesumo"}
                      description={"A fully functional, regular, real-time, responsive website for " +
                      "residence booking in Varanasi. It uses the Google Map API to get the area " +
                      "wise rent search."}
                      tech_stack={"HTML, CSS, Bootstrap, Javascript."}
                      link={"https://gamesumo.herokuapp.com/"}
                />
                <Card src={require("../images/image_captioning.png")}
                      title={"Image Captioning"}
                      description={"a fully functional, regular, real-time, responsive website for " +
                      "residence booking in Varanasi. It uses the Google Map API to get the area " +
                      "wise rent search."}
                      tech_stack={"NodeJs, MongoDB, HTML, CSS, Bootstrap, Javascript."}
                      link={"https://github.com/rohit10000/rnn_projects/tree/master/image_captioning"}
                />
            </div>
            <div className="project__section">
                <Card src={require("../images/nmt.png")}
                      title={"Neural Machine Transfer"}
                      description={"A fully functional, regular, real-time, responsive website for " +
                      "residence booking in Varanasi. It uses the Google Map API to get the area " +
                      "wise rent search."}
                      tech_stack={"NodeJs, MongoDB, HTML, CSS, Bootstrap, Javascript."}
                      link={"https://github.com/rohit10000/rnn_projects/tree/master/machine_translation"}
                />
                <Card src={require("../images/calculator.png")}
                      title={"Calculator"}
                      description={"A fully functional, regular, real-time, responsive website for " +
                      "residence booking in Varanasi. It uses the Google Map API to get the area " +
                      "wise rent search."}
                      tech_stack={"NodeJs, MongoDB, HTML, CSS, Bootstrap, Javascript."}
                      link={"https://codepen.io/rohit10000/full/GrjJmO"}
                />
                <Card src={require("../images/tic_tac_toe.png")}
                      title={"Tic Tac Toe"}
                      description={"A fully functional, regular, real-time, responsive website for " +
                      "residence booking in Varanasi. It uses the Google Map API to get the area " +
                      "wise rent search."}
                      tech_stack={"NodeJs, MongoDB, HTML, CSS, Bootstrap, Javascript."}
                      link={"https://codepen.io/rohit10000/full/VPPxRO"}
                />
            </div>
            <Footer/>
        </div>
    );
}

export default Project;
