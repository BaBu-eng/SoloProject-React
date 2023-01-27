import React from "react";

export default function Input(){
    const [formData, setFormData] = React.useState({fisrtText: "", lastText: ""})
    function handleChange(event){
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    function handleSubmitData(event){
        event.preventDefault()
        // console.log(formData)
    }

    // React.useEffect(() => {
    //         fetch("https://i.imgflip.com/1bij.jpg")
    //         .then(res => res.json())
    //         .then(data => console.log(data.data))
    // }, [])
    
    return(
        <form onSubmit={handleSubmitData}>
            <input className="input1--" type="text" placeholder="Enter Upper Text" name="fisrtText" onChange={handleChange} value={formData.fisrtName}></input>
            <input className="input2--" type="text" placeholder="Enter Bottom Text" name="lastText" onChange={handleChange} value={formData.lastName}></input>
            <h2 className="UpperText--">{formData.fisrtName}</h2>
            <h2 className="BottomText--">{formData.lastName}</h2>
            <button className="Btn--"><h1>Get a new meme image  🖼</h1></button>
        </form>
    )
}


