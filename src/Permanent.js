import React from 'react';
import {
  NavLink
} from "react-router-dom";

//Components that do not get routed or changed

const Header=()=>{
  return (
    <header>
            <nav>
              <h1>
                <a href="/">Makinahgram</a>
              </h1>
              <ul>
                <li className="home">
                  <NavLink exact to="/" className="homebutton">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/users/2" className="myAccount">
                    My Account
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
    )
}

const Footer=()=>{
  return(
     <footer>
            <p>
              <small>Copyright © 2015 Makinahgram. All rights reserved.</small>
            </p>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">My Account</a>
              </li>
            </ul>
          </footer>
    )
}

export {Header,Footer}