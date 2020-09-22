import React from 'react';
import "./Report.css";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

function Report(){
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    return (
        <div className="report">
            <div className="report__resume">
                <Document file={require("../rohits_resume.pdf")} >
                    <Page pageNumber={1}
                          width = {window.innerWidth > 720 ? 900: 250}
                    />
                </Document>
            </div>
        </div>
    );
}

export default Report;

