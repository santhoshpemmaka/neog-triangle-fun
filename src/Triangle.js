import React, { useState } from 'react';
import './Triangle.css';

const Triangle = () => {
    const [getangle1,setangell] = useState('');
    const [getangle2,setangel2] = useState('');
    const [getangle3,setangel3] = useState('');
    const [getText,setText] = useState('');
    const inputhandler1 = (e) => {
        setangell(e.target.value)
    }
    const inputhandler2 = (e) => {
        setangel2(e.target.value)
    }
    const inputhandler3 = (e) => {
        setangel3(e.target.value)
    }

    const btnHandler = () => {
        let sumofAngles = Number(getangle1) + Number(getangle2) + Number(getangle3);
        if(sumofAngles === 180){
            setText(`Yay, The angles from a triangle :)`);
        }
        else{
            setText('Oh! The angles not from triangle :(');
        }
        setangell('');
        setangel2('');
        setangel3('');
    }
    return(
        <div className="main">
            <h2 className="main-header">Is Triangle? </h2>
            <div className="input-container">
                <h3>angel1(in degress)</h3>
                <input onChange={(e) => inputhandler1(e)} type="number" value={getangle1} />
            </div>
            
            <h3>angel2(in degress)</h3>
            <input onChange={(e) => inputhandler2(e)} type="number"  value={getangle2}/>
            <br/>
            <h3>angel3(in degress)</h3>
            <input onChange={(e) => inputhandler3(e)} type="number"  value={getangle3}/>
            <br/>
            <button className="btn-submit" onClick={btnHandler}>Is Triangle?</button>
            <h2>{getText}</h2>
        </div>
    )
}

export default Triangle;