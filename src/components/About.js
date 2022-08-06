import React from "react";
import Links from "./Links";

function About(props) {
  console.log(props.bio)
  if (props.bio === null || props.bio ===""){
    return  <div id="about">
    <h2>About Me</h2>
    <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    <Links ghLink={props.links.github} liLink={props.links.linkedin}/>
  </div>
  }
  else {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );}
}

export default About;
