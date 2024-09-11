import React, { useState, useRef } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

let data = ["","","","","","","","",""];

export const TicTacToe = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    let boxRef0  = useRef(null);
    let boxRef1  = useRef(null);
    let boxRef2  = useRef(null);
    let boxRef3  = useRef(null);
    let boxRef4  = useRef(null);
    let boxRef5  = useRef(null);
    let boxRef6  = useRef(null);
    let boxRef7  = useRef(null);
    let boxRef8  = useRef(null);
    let box_array = [boxRef0,boxRef1,boxRef2,boxRef3,boxRef4,boxRef5,boxRef6,boxRef7,boxRef8];

    const toggle = (element, index) => {
        if(lock){
            return 0;
        }
        if(count%2===0) {
            element.target.innerHTML = `<img src='${cross_icon}'>`;
            data[index] = "x";
            setCount(++count);
        }
        else {
            element.target.innerHTML = `<img src='${circle_icon}'>`;
            data[index] = "o";
            setCount(++count);
        }

        checkWin();
    }

        const checkWin = () => {
            if(data[0]===data[1] && data[1]===data[2] && data[2]!=="") {
                won(data[2]);
            }
            else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="") {
                won(data[5]);
            }
            else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="") {
                won(data[8]);
            }
            else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="") {
                won(data[6]);
            }
            else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="") {
                won(data[7]);
            }
            else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="") {
                won(data[8]);
            }
            else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="") {
                won(data[8]);
            }
            else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="") {
                won(data[6]);
            }
        }

        const won = (winner) => {
            setLock(true);
            if(winner==="x") {
                titleRef.current.innerHTML = `Congratulations: <img src='${cross_icon}'> Wins!`;
            }
            else {
                titleRef.current.innerHTML = `Congratulations: <img src='${circle_icon}'> Wins!`;
            }
        }
    const reset = () => {
        setLock(false);
        data = ["","","","","","","","",""];
        titleRef.current.innerHTML = 'Tic Tac <span>Toe</span>';
        box_array.map((e) => {
            e.current.innerHTML = "";
        })
    }    

  return (
    <div className='container'>
        <h1 className='title' ref={titleRef}> Tic Tac <span>Toe</span></h1>
        <div className="board">
            <div className="row1">
                <div className="box" ref={boxRef0} onClick={(element) => {toggle(element,0)}}></div>
                <div className="box" ref={boxRef1} onClick={(element) => {toggle(element,1)}}></div>
                <div className="box" ref={boxRef2} onClick={(element) => {toggle(element,2)}}></div>
            </div>
            <div className="row2">
                <div className="box" ref={boxRef3} onClick={(element) => {toggle(element,3)}}></div>
                <div className="box" ref={boxRef4} onClick={(element) => {toggle(element,4)}}></div>
                <div className="box" ref={boxRef5} onClick={(element) => {toggle(element,5)}}></div>
            </div>
            <div className="row3">
                <div className="box" ref={boxRef6} onClick={(element) => {toggle(element,6)}}></div>
                <div className="box" ref={boxRef7} onClick={(element) => {toggle(element,7)}}></div>
                <div className="box" ref={boxRef8} onClick={(element) => {toggle(element,8)}}></div>
            </div>
        </div>
        <button className="reset" onClick={() => {reset()}}>Reset</button>
    </div>
  )
}

export default TicTacToe
