import React from "react";
import { Link } from "react-router-dom"; 
import './Header.css';

const Header = () => {
    return(
        <div className="header">
            <div className="nav">
                <Link className='link' to='/'>
                    <h3>Is Triangle ?</h3>
                </Link>
                <Link className='link' to='/quiz'>
                    <h3>Quiz</h3>
                </Link>
                <Link className='link' to='/area'>
                    <h3>Area</h3>
                </Link>
                <Link  className='link' to='/hypotensue'>
                    <h3>Hypotenuse</h3>
                </Link>
            </div>
        </div>
    )
}
export default Header;
