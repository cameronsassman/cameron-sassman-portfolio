import html from "../../assets/skills/Html.png";
import css from "../../assets/skills/Css.png";
import js from "../../assets/skills/Javascript.png";
import ts from "../../assets/skills/Typescript.png";
import vue from "../../assets/skills/Vuejs.png";
import react from "../../assets/skills/React.png";
import node from "../../assets/skills/Nodejs.png";
import python from "../../assets/skills/Python.png";
import git from "../../assets/skills/Git.png";
import classes from "../styles/skillsbar.module.css";

const Skill = [html, css, js, ts, vue, react, node, python, git];

const SkillsBar = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.skills}>
        {Skill.map((image, index) => (
          <img key={index} src={image} alt={`skill-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default SkillsBar;
