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

                <Card src={require("../images/calculator.png")}
                      title={"Calculator"}
                      description={"App provides simple mathematical functions in a beautifully designed interface." +
                      "It performs basic calculations such as addition, subtraction, multiplication, and division."}
                      tech_stack={"HTML, CSS, Bootstrap, Javascript."}
                      link={"https://codepen.io/rohit10000/full/GrjJmO"}
                />

                <Card src={require("../images/gamesumo.png")}
                      title={"Gamesumo"}
                      description={"A responsive blogging website and community platform for game freaks " +
                      "where the audience can comment on any game character, appreciate its power" +
                      " or can give suggestions for improving any game character."}
                      tech_stack={"HTML, CSS, Bootstrap, Javascript."}
                      link={"https://gamesumo.herokuapp.com/"}
                />
                <Card src={require("../images/image_captioning.png")}
                      title={"Image Captioning"}
                      description={"Model generates the most suitable description for any given image." +
                      "Extracted the image features using VGG16 DNN model and trained the LSTM model on " +
                      "the text by injecting image features."}
                      tech_stack={"Deep CNN, Tensorflow, Keras, LSTM"}
                      link={"https://github.com/rohit10000/rnn_projects/tree/master/image_captioning"}
                />

                <Card src={require("../images/nmt.png")}
                      title={"Neural Machine Transfer"}
                      description={"Model translates the French sentences to English sentences." +
                      "It uses attention weights where the focus is on giving attention to every" +
                      "individual word at a particular instant of time in order to generate our desired" +
                      "translated word."}
                      tech_stack={"Keras, Bidirectional LSTM, NLTK"}
                      link={"https://github.com/rohit10000/rnn_projects/tree/master/machine_translation"}
                />

                <Card src={require("../images/gometech.png")}
                      title={"Gometech"}
                      description={"A fully functional, regular, real-time, responsive website for " +
                      "residence booking in Varanasi. It uses the Google Map API to get the area " +
                      "wise rent search."}
                      tech_stack={"NodeJs, MongoDB, HTML, CSS, Bootstrap, Javascript."}
                      link={"https://gometech.herokuapp.com/"}
                />

                <Card src={require("../images/tic_tac_toe.png")}
                      title={"Tic Tac Toe"}
                      description={"A game of Noughts and Crosses or sometimes X and O. " +
                      "The player can mark the spaces in a 3×3 grid and the one who succeeded in placing three " +
                      "respective marks in a horizontal, vertical or diagonal row wins the game."}
                      tech_stack={"HTML, CSS, Bootstrap, Javascript."}
                      link={"https://codepen.io/rohit10000/full/VPPxRO"}
                />
            </div>
            <Footer/>
        </div>
    );
}

export default Project;
