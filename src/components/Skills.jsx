import React from "react";

const skills = [
    "React.js",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "Git & GitHub",
    "Python",
    "C/C++",
    "Express",
    "AWS"
  ];
  
  const Skills = () => {
    return (
      <section id="skills" className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 bg-gray-200 rounded-lg text-gray-700 font-semibold">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  