import React from "react";

const projects = [
    {
      title: "BlogNest",
      description: "A blogging website for users to create and edit blogs",
      link: "https://blog-site-navy-sigma.vercel.app/",
    },
    {
      title: "Coding Discussion Forum",
      description: "A structured forum with real-time discussions, AI-powered search, and gamification.",
      link: "#",
    },
    {
      title: "Cloud Notes App",
      description: "A real-time cloud-based notes app with Firebase authentication and storage.",
      link: "#",
    },
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-20 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {projects.map((project, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <a href={project.link} className="mt-4 inline-block text-blue-500 font-semibold">
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  