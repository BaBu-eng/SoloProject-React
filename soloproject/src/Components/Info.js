import React from "react";
import Btn from "./Btn";
import About from "./About";
import Footer from "./Footer";


export default function Info(){
    return(
        <div className="Nav">
        <nav className="Nav--Bar">
            <img src="https://images.unsplash.com/photo-1613053341085-db794820ce43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="this is user data"></img>
            <h3>Vivek Joge</h3>
            <h4>Web-Developer</h4>
            <h5>vivekjoge15@gmail.com</h5>
            <Btn/>
        </nav>
        <About/>
        <Footer/>
        </div>   
    )
}