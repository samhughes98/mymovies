import React from 'react';

export class MovieList extends React.Component {
    render() {
        return (
            <div id="movieListDiv">
                <img id="movieImg" src="../static/images/mmLogo.png" alt = ""/>
                <div id="movieInfo">
                    <span  id="movieTitle"><h1>Title</h1></span>
                    <p id="movieDesc">ff</p>
                    <p id="movieRating"></p>
                </div>
            </div>          
        );
    }
}