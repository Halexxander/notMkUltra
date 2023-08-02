import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

import "./Navstyle.css";

const Navbar = () => {

  return (
    <div className="navgeneral">
      <h4 id="h41">Alex<h4 id="h42">.Js</h4></h4>

    
      <ul className="desktop-menu">
        <li>
          <Link className="link" to="/">Home</Link>
        </li>
        <li>
          <Link className="link" to="/about">About</Link>
        </li>
        <li>
          <Link className="link" to="/projects">My Projects</Link>
        </li>
        <li>
          <Link className="link" to="/contact">Contact</Link>
        </li>
      </ul>

    
      
     

   
    </div>
  );
};

export default Navbar;
