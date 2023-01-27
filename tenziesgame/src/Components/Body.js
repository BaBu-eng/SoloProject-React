import React from "react";
import Dice from "./Dice";

export default function Body(){
    return(
        <div className="App">
            <div className="BodyText--">
                <h1>Tenzies</h1>
                <h3>Roll until all dice are the same. <br></br> Click each die to freeze it at its current value between rolls.</h3>
            </div>
            <Dice/>
        </div>
    )
}