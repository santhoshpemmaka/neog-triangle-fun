import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
    const correctAnswer = ['90°','right-angled'];
    const [getInput1,setInput1] = useState('');
    const [getInput2,setInput2] = useState('');
    const [printMarks,setmarks] = useState('');
    const inputHandler1 = (e) => {
        setInput1(e.target.value);
    }
    const inputHandler2 = (e) => {
        setInput2(e.target.value);
    }
    const btnHandler = () => {
        let totalScore = 0;
        if(correctAnswer[0] === getInput1){
            console.log('reached')
            totalScore++;
        }
        if(correctAnswer[1] === getInput2){
            console.log('reached')
            totalScore++;
        }
        setmarks(`Your score is ${totalScore} :)`)
        setInput1();
        setInput2();
    }
    return(
        <div className="main">
            <h2 className="main-header">Quiz </h2>
            <div className="quiz-container">
                <p>
                    What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?
                </p>
                <label style={{fontSize:'2rem', color:'white'}}>
                    <input onChange={(e) => inputHandler1(e)} className="input1" type="radio" value="45°" name="quiz" /> 45° 
                </label>
                <label style={{fontSize:'2rem', color:'white'}}>
                    <input   onChange={(e) => inputHandler1(e)} className="input1" type="radio" value="60°" name="quiz" /> 60° 
                </label>
                <label style={{fontSize:'2rem', color:'white'}} >
                    <input   onChange={(e) => inputHandler1(e)} className="input1" type="radio" value="90°" name="quiz" /> 90° 
                </label>
            </div>
            <div className="quiz-container">
                <p>
                    If a triangle has an angle of 90 degrees, what is it called?
                </p>
                <label style={{fontSize:'2rem', color:'white'}}>
                    <input onChange={(e) => inputHandler2(e)} className="input1" type="radio" value="obtuse" name="quiz1" /> obtuse 
                </label>
                <label style={{fontSize:'2rem', color:'white'}}>
                    <input onChange={(e) => inputHandler2(e)} className="input1" type="radio" value="acute" name="quiz1" /> acute
                </label>
                <label style={{fontSize:'2rem', color:'white'}} >
                    <input onChange={(e) => inputHandler2(e)} className="input1" type="radio" value="right-angled" name="quiz1" /> right angled
                </label>
            </div>
            <button className="btn-submit" onClick={btnHandler} >Submit Form</button>
            <h3>{printMarks}</h3>
        </div>
    )
}

export default Quiz;