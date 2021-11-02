import React,{useState} from 'react';
import './Area.css';

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
        let base = Number(getangle1);
        let height = Number(getangle2);
        let area = (base*height)/2;
        setText(`The area of triangle is ${area} cm²`)
        setangell('');
        setangel2('');
    }
    return(
        <div className="main">
        <h2 className="main-header"> Check Area Of Trianlge </h2>
        <div className="input-container">
            <h3>Base (cm)</h3>
            <input onChange={(e) => inputHandler1(e)} type="number" value={getangle1} />
        </div>
        
        <h3>Height (cm)</h3>
        <input onChange={(e) => inputHandler2(e)} type="number"  value={getangle2}/>
        <br/>
        <button className="btn-submit" onClick={btnHandler}>Check Area</button>
        <h2>{getText}</h2>
    </div>
    )
}

export default Hypotenuse;