
import React from "react"
import "./My-work.css"
import CwooPhoto from "../Image/Display1.JPG"
import Elewa from "../Image/ElewaEducation.JPG"
import Church from "../Image/Ebenezer.JPG"

function MyWork() {
    return(
        <div >
        <p id="parra">
            <h1>All my works are here: </h1>

            <img src={Elewa}/>
            <p>This is my project for Education. For more: <a href="https://kdessaik.github.io/Project-1-ELEWA-Academic/">ElewaEducation.com</a> </p>

            <img src={CwooPhoto}/>
            <p>This is an Organization ,where I participate to save live, I created this website for them. For more: <a href="https://cwoorganoization.org/">CWOOrganization.org</a></p>

            <img   id="image3"src={Church}/>
            <p id="parra2"> This is a website for the church called Ebenezer Cross Church. For more: <a href="https://kdessaik.github.io/EbenezerCrosschurch-Repo/"> EbenezerCrossChurch.com </a></p>

            
            </p> 
        
        </div>
    )
}
export default MyWork