import React from "react";

export default function About() {
    return (
        <section
          id="about-section" 
          className="flex flex-col justify-center items-center w-full h-screen bg-black bg-cover bg-center"
        >
          <h1 className="text-white text-4xl mb-4">Hey! I am Apoorva.</h1>
          <p className="text-3xl font-light italic text-black">an aspiring web developer.</p>
          <h5 id="intro" className="text-white text-xl mt-4">
            I love creating and coding and have been passionate about it since I was a
            wee little kid.
          </h5>
        </section>
    );
}
