import React from "react";
import Die from "./Die";
import {nanoid} from "nanoid"

export default function Dice() {
    const [dice, setDice]  = React.useState(allNewDice())
    function allNewDice(){
        const newDice = []
        for (let i = 0; i< 10; i++){
            newDice.push(generateNewDie())
        }
        return newDice
    }
    function rollDice(){
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? die : generateNewDie()
        }))
    }
    function generateNewDie(){
        return{
            value: Math.ceil(Math.random() * 6),
                isHeld: false,
               id: nanoid()
        }
    }
    function holdDice(id){
        setDice(oldDice => oldDice.map(die =>{
            return die.id === id ?
             {...die, isHeld: !die.isHeld} : 
             die

        }))
    }
    const diceElement = dice.map(die => (<Die key={die.id} value={die.value} isHeld={die.isHeld}
    holdDice={() => holdDice(die.id)} />))

    const [tenzies, settenzies] = React.useState(false)
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const fistValue = dice[0].value
        const allSameValue = dice.every(die => die.value === fistValue)
        if (allHeld && allSameValue){
            settenzies(true)
            alert("You Won The Game")
        }
    }, [dice])

  return (
    <main>
        <div className="Dice--">
            {diceElement}             
        <button className="DiceButoon--" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
        </button>
        </div>
    </main>
  );
}
