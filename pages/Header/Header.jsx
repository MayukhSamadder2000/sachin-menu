import React from "react";
import "./header.module.css";
import Navbar from "../Navbar/Navbar";
import Navres from "../Navres/Navres";

export default function Header() {
  return (
    <div className='header'>
      <div className='bigNav'>
        <Navbar />
      </div>
      <div className='smallNav'>
        <Navres />
      </div>
    </div>
  );
}
