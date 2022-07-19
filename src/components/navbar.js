import React from 'react';
import mmLogo from '../static/images/mmLogo.png';

export class NavBar extends React.Component {
    render() {
        return (
            <div id="navDiv">
                  <img src={mmLogo} id="navLogo" alt="navLogo"/>
                <div id="navLinks">
                  
                <ul>
                    <li>Movie List</li>
                    <li>Movie Ratings</li>
                    <li>Your List</li>
                    <input id="searchBar" type="search" placeholder='Search...'></input>
                    <button id="searchBtn"> Search</button>
                                      
                </ul>
                </div>

            </div>          
        );
    }
}