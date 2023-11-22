import React from "react"
import profilePicture from "../../assets/profilePicture.jpg"

function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Software Developer</p>
      <hr />
      <img className="my-pic" src={profilePicture} alt="Profile picture"/>
      <p className="content is-italic mt-4">
      Hi there, My name is Yana, and it is very nice meeting you!
      </p>
      <p className="content">
      I am versatile professional with vast experience in restaurant management, administration, and customer service. Recent graduate in Full Stack Web Development from the University of Central Florida (Go Knights!), specializing in the MERN stack. Committed to delivering high-quality results and creative problem-solving. Eager to bring multifaceted skills to a dynamic role in software development, contributing innovative solutions and collaborative energy to drive success in the tech industry.
      </p>
    </div>
  );
}

export default About;