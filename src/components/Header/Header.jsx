import React from 'react';
import { FaMoon } from "react-icons/fa";

export const Header = () => {
    const logo = <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="Logo"/>
    return (
      <div className="header">
        {logo}
        <h3>Keep Note</h3>

        <div>
         
          <FaMoon className="toggle-dark" style={{fontSize: '25px'}} />{" "}
        </div>
      </div>
    );
}
