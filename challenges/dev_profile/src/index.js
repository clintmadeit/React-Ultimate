import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "Web Development",
    level: "Advanced",
    color: "#C3DCAF",
  },
  {
    skill: "HTML + CSS",
    level: "Advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "Advanced",
    color: "#EFD81D",
  },
  {
    skill: "Git and GitHub",
    level: "Intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "Advanced",
    color: "#60DAFB",
  },
  {
    skill: "Audio Engineering",
    level: "Advanced",
    color: "navy",
  },
  {
    skill: "GUI Design",
    level: "Beginner",
    color: "purple",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="images/profile.jpeg" alt="avatar" />;
}

function Intro() {
  return (
    <div className="data">
      <h1>Johnclinton Luseno</h1>
      <p>
        Full-stack software developer, front-end specialist. When not coding, I
        do audio engineering as a Front of House Engineer, Mixing and Mastering
        Engineer. I also do UI designs. I speak English, Swahili and a little
        French
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "Intermediate" && "🧡"}
        {level === "Beginner" && "✌️"}
        {level === "Advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
