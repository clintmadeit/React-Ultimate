import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
      <Skill skill="React" emoji="✌️" color="blue" />
      <Skill skill="GUI" emoji="❤️‍🔥" color="purple" />
      <Skill skill="HTML+CSS" emoji="💪" color="orangered" />
      <Skill skill="JavaScript" emoji="❤️‍🔥" color="yellow" />
      <Skill skill="Mixing" emoji="✌️" color="navy" />
      <Skill skill="Production" emoji="💯" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
