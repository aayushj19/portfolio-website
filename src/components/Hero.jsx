import React from "react";

const Hero = () => {
    return (
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold">Hey, I'm Aayush 👋</h1>
        <p className="mt-4 text-lg max-w-xl">
          A passionate web developer building amazing digital experiences.
        </p>
        <a href="#projects" className="mt-6 bg-white text-black px-6 py-2 rounded-lg shadow-lg text-lg font-semibold">
          View Projects
        </a>
      </section>
    );
  };
  
  export default Hero;
  