import { useState } from "react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("technical");

  const skillCategories = {
    technical: {
      title: "Technical Skills",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "TypeScript", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 80 },
        { name: "AWS", level: 70 },
      ],
    },
    design: {
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 85 },
        { name: "Photoshop", level: 75 },
        { name: "UI/UX Design", level: 85 },
        { name: "Responsive Design", level: 95 },
        { name: "Prototyping", level: 80 },
        { name: "Design Systems", level: 85 },
        { name: "User Research", level: 70 },
      ],
    },
    soft: {
      title: "Soft Skills",
      skills: [
        { name: "Communication", level: 95 },
        { name: "Team Leadership", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Project Management", level: 80 },
        { name: "Mentoring", level: 85 },
        { name: "Agile/Scrum", level: 90 },
        { name: "Client Relations", level: 85 },
        { name: "Time Management", level: 90 },
      ],
    },
  };

  const technologies = [
    "React",
    "Vue.js",
    "Angular",
    "Node.js",
    "Express",
    "Next.js",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
    "Git",
    "Jest",
    "Cypress",
    "Webpack",
    "Vite",
    "Tailwind CSS",
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills and Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my techincal abilities and professional
            skills
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-primary-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {skillCategories[category].title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between text-gray-500">
                <small>Beginner</small>
                <small>Proficient</small>
              </div>

              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-linear-to-r from-primary-500 to-primary-600 h-2 rounded-ful transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            My Tech Stack
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
