import React from "react";
// import Input from "./Input"
// import Photo from "./Photo";

export default function Btn(){
    // function handleClick(){
    //    let text1 = "Take Your Money";
    //    let text2 = "Go out";
    // //    console.log(text1,text2);
    //   document.getElementsByClassName("Btn--").innerHTML = text1 + text2;
    // }
    // const [thingArray, setThingArray] = React.useState(["Thing 1", "Thing 2"])
    // function addItem(){
    //     setThingArray(prevSete=>{
    //         return([...prevSete, `Thing ${prevSete + 1}`])
    //     })
    // }
    // const thingElements = thingArray.map(thing => <h1 key={thing}>{thing}</h1>)


        // MAin Function Program

        const [meme, setMeme] = React.useState({
            toptext: "",
            bottomtext: "",
            memeimg: "https://i.ibb.co/DgFjMJK/memeimg.png"
        })
        function getMemeImage(){
            const memeArray = meme.data.memes
            const randomNumber = Math.floor(Math.random() * memeArray.lenght)
            setMeme(memeArray[randomNumber].url)
        }

    return(
        <div >
            <button onClick={getMemeImage} className="Btn--"><h1>Get a new meme image  🖼</h1></button>
            {/* {thingElements} */}
        </div>
    )
}