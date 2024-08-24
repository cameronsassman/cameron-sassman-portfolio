import { Element } from "react-scroll";
import classes from "../styles/about.module.css";

const About = () => {
  return (
    <Element name="about">
    <section className={classes.section}>
      <div className={classes.homePage}>
        <div className={classes.pagetitle}>
          <p className={classes.ptitle}>ABOUT</p>
        </div>
        <div className={classes.contentarea}>
          <p className={classes.description}>
            <p className={classes.subheading}>{"{About Me}"}</p> 
            I'm a passionate developer with a growing passion for exploring and testing the
            limits of technology. I am eager to learn and excited about the
            endless possibilities that the tech world offers.
          </p>
          <p className={classes.description}>
          <p className={classes.subheading}>{"{My Journey}"}</p>
            My journey in development is driven by curiosity and a desire to
            understand how things work. I love diving into new challenges and
            finding innovative solutions to problems, no matter how big or
            small.
          </p>
          <p className={classes.description}>
          <p className={classes.subheading}>{"{Work With Me}"}</p>
            Collaboration is key for me, and I thrive in environments where we
            all push each other to go beyond our limits. I am always up for a
            collaborative project so if you are keen to learn and create
            together, please let me know!
          </p>
          <p className={classes.description}>
          <p className={classes.subheading}>{"{Hobbies}"}</p>
            I enjoy playing baseball, watching anime, reading manga and camping,
            which provide a great balance to my work and often spark new ideas
            for my projects. My hobbies keep me inspired and constantly curious
            about the world around me.
          </p>
        </div>
      </div>
    </section>
    </Element>
  );
};

export default About;
