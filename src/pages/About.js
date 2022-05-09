import React from "react"
import "./About.css"
import PhotoD from "../Image/dessai55.JPG"
import {useNavigate} from "react-router-dom"
function About(){
    //grab id
    const parra=document.getElementById("Contacts")
    const navigation=useNavigate();
    

function handleClick(){
    navigation("/contact")
   

} 

    return(
        <div id="about" >
            <img src={PhotoD} alt="no-Image" />
        <p>
            My name is Kambale Kibeho, I am a Congolese , I am interesting in software develop. I am a front-end Developer and still learning Back-end.
            <button  onClick={handleClick}> Contact Me!</button>
            <p id="Contacts"></p>
        </p>
        </div>
    )
}
export default About