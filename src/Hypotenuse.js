import React,{useState} from 'react';
import './Hypotenuse.css';

const Hypotenuse = () =>{
    const [getangle1,setangell] = useState('');
    const [getangle2,setangel2] = useState('');
    const [getText,setText] = useState('');

    const inputHandler1 = (e) => {
        setangell(e.target.value);
    }
    const inputHandler2 = (e) => {
        setangel2(e.target.value);
    }
    const btnHandler = () => {
        let side1 = Number(getangle1) * Number(getangle1);
        let side2 = Number(getangle2) * Number(getangle2);
        let length = Math.sqrt(side1+side2);
        setText(`The length of the hypotenuse ${length} cm`);
        setangell('');
        setangel2('');
    }
    return(
        <div className="main">
        <h2 className="main-header"> Check Hypotenuse </h2>
        <div className="input-container">
            <h3>a =</h3>
            <input onChange={(e) => inputHandler1(e)} type="number" value={getangle1} />
        </div>
        
        <h3>b =</h3>
        <input onChange={(e) => inputHandler2(e)} type="number"  value={getangle2}/>
        <br/>
        <button className="btn-submit" onClick={btnHandler}>Check Hypotenuse</button>
        <h2>{getText}</h2>
    </div>
    )
}

export default Hypotenuse;