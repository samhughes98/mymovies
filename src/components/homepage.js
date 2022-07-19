import React from 'react';
import bannerImg1 from "../static/images/bannerImg1.jpg";

export class HomePage extends React.Component {
    render() {
        return (
            <div id="bannerDiv">
                <img id="bannerImg" src={ bannerImg1 } alt=""/>
                <div id="bannerTextDiv">
                <h1> Find your favourite movies</h1>
                <p>Begin your movie journey</p>

                <button id="bannerBtn">Find a Movie</button>
                </div>
            </div>          
        );
    }
}