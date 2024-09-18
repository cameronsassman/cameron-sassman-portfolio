import { Element } from "react-scroll";
import classes from "../styles/experience.module.css";

const Experience = () => {
  return (
    <Element name="experience">
      <section className={classes.section}>
        <div className={classes.homePage}>
          <div className={classes.container}>
            <h1 className={classes.maintitle}>Experience</h1>
          </div>

          <div className={classes.contentarea}>
            <p className={classes.description}>
              <p className={classes.subheading}>
                {"{Junior Frontend Developer}"}
              </p>
              <p className={classes.heading}>Channel Mobile</p>
              At Channel Mobile I contributed as a Frontend Developer working
              with a tech stack that included React, Jest and Cypress. My tasks
              included creating and maintaining reusable components, adhering to
              Material design standards, writing unit tests to ensure code
              reliability and stability through the use of jest, as well as
              developing and executing end-to-end Cypress tests to validate
              critical user flows and detect potential issues. This role allowed
              me to gain insights to automation testing and improve the overall
              user experience
              <p className={classes.date}>June 2023 - Sep 2023</p>
            </p>

            <p className={classes.description}>
              <p className={classes.subheading}>{"{Junior Developer}"}</p>
              <p className={classes.heading}>Make Better Consulting</p>
              During my time at Make Better Consulting, I started as an intern
              where I built websites using React and developed applications with
              React Native. This experience honed my skills in front-end
              development and provided a solid foundation in creating responsive
              and dynamic web applications. I progressed to junior developer
              where I continued to build applications using React Native and
              expanded my expertise by incorporating TypeScript into projects.
              This role allowed me to enhance application performance and
              reliability.
              <p className={classes.date}>Jan 2022 - Jan 2023</p>
            </p>
            <p className={classes.description}>
              <p className={classes.subheading}>{"{Intern Web Developer}"}</p>
              <p className={classes.heading}>LC Studio</p>
              During my internship at LC Studio, I had the opportunity to work
              with a diverse range of technologies, including Node.js, Vue.js,
              PostgreSQL and Adobe XD. In collaboration with the team, we
              developed a full-stack web application as well as developing mock
              ups and wireframes. This experience allowed me to gain practical
              knowledge and hands-on experience in building scalable web
              applications, enhancing my skills as a web developer. Working at
              LC Studio grew my passion for software development.
              <p className={classes.date}>Apr 2021 - Dec 2021</p>
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Experience;
