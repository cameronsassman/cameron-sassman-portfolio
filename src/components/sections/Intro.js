import { Link as ScrollLink } from "react-scroll";
import { Element } from "react-scroll";

import ProfileImage from "../../assets/me.jpg";
import classes from "../styles/intro.module.css";

const Intro = () => {
  return (
    <div id={classes.homePage}>
      {/* Navbar */}
      <nav className={classes.navbar}>
        <h3 className={classes.cornerP}>
          <ScrollLink to="home" smooth={true} duration={500}>
            CAMERON SASSMAN
          </ScrollLink>
        </h3>
        <ul className={classes.links}>
          <ScrollLink
            className={classes.link}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </ScrollLink>
          <ScrollLink
            className={classes.link}
            to="experience"
            smooth={true}
            duration={500}
          >
            Experience
          </ScrollLink>
          <ScrollLink
            className={classes.link}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </ScrollLink>
          <a
            className={classes.link}
            href="mailto:cjs.sassy01@gmail.com"
            target="_blank"
          >
            Contact
          </a>
        </ul>
      </nav>
      <Element name="home">
        <section className={classes.section}>
          <div className={classes.homePage}>
            <div className={classes.pagetitle}>
              <p className={classes.ptitle}>CODE & CHILL</p>
            </div>
            <div className={classes.contentarea}>
              <h1 className={classes.maintitle}>
                Passionate <span className={classes.stndout}>Developer</span>
              </h1>
              <div className={classes.contentleft}>
                <div className={classes.profilestuff}>
                  <img
                    className={classes.profile}
                    src={ProfileImage}
                    alt="Profile picture"
                  />
                </div>
              </div>
              <div className={classes.container}>
                <div className={classes.contentright}>
                  <div className={classes.btncontain}>
                    <div className={classes.descrbtn}>
                      <a
                        className={classes.button}
                        href="https://github.com/cameronsassman"
                        target="_blank"
                      >
                        <i className="fa-brands fa-github fa-2xl"></i>
                      </a>
                    </div>
                    <div className={classes.descrbtn}>
                      <a
                        className={classes.button}
                        href="https://www.linkedin.com/in/cameron-sassman/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-linkedin fa-2xl"></i>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className={classes.description}>
                      Hi there, welcome to my site. Built from the ground up
                      with late-night coding, a caffeine addiction and lots of
                      fun
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </div>
  );
};

export default Intro;
