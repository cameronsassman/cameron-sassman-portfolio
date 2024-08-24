import { Element } from "react-scroll";
import classes from "../styles/projects.module.css";
import Hogwarts from "../../assets/personal-Projects/HogwartsApp.png";
import Pokedex from "../../assets/personal-Projects/Pokedex.png";
import WeatherApp from "../../assets/personal-Projects/WeatherApp.png";

const Projects = () => {
  return (
    <Element name="projects">
      <section className={classes.section}>
        <div className={classes.homePage}>
          <div className={classes.pagetitle}>
            <p className={classes.ptitle}>PROJECTS</p>
          </div>
          <div className={classes.contentarea}>
            <div className={classes.contentleft}>
              <div className={classes.profilestuff}>
                <img
                  className={classes.profile}
                  src={Hogwarts}
                  alt="Hogwarts App"
                />
                <div className={classes.righttopl}>Hogwarts App</div>
                <div className={classes.rdescrbtn}>
                  <a
                    className={classes.button}
                    href="https://snack.expo.dev/@camsas01/hogwarts-app"
                    target="_blank"
                  >
                    <i className="fa-solid fa-eye"></i>
                  </a>
                </div>
                <div className={classes.rdescrbtn2}>
                  <a
                    className={classes.button}
                    href="https://github.com/cameronsassman/Hogwarts-app.git"
                    target="_blank"
                  >
                    <i className="fa-solid fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.container}>
              <div className={classes.contentright}>
                <div className={classes.profilestuff2}>
                  <img
                    className={classes.profile}
                    src={WeatherApp}
                    alt="Weather App"
                  />
                  <div className={classes.lefttopl}>Weather App</div>
                  <div className={classes.ldescrbtn}>
                    <a
                      className={classes.button}
                      href="https://vue-weather-now.netlify.app/"
                      target="_blank"
                    >
                      <i className="fa-solid fa-eye"></i>
                    </a>
                  </div>
                  <div className={classes.ldescrbtn2}>
                    <a
                      className={classes.button}
                      href="https://github.com/cameronsassman/Weather-App.git"
                      target="_blank"
                    >
                      <i className="fa-solid fa-code"></i>
                    </a>
                  </div>
                </div>
                <div className={classes.profilestuff}>
                  <img
                    className={classes.profile}
                    src={Pokedex}
                    alt="Pokedex"
                  />
                  <div className={classes.lefttopl}>Pokedex</div>
                  <div className={classes.ldescrbtn}>
                    <a
                      className={classes.button}
                      href="https://cameron-pokedex.netlify.app/"
                      target="_blank"
                    >
                      <i className="fa-solid fa-eye"></i>
                    </a>
                  </div>
                  <div className={classes.ldescrbtn2}>
                    <a
                      className={classes.button}
                      href="https://github.com/cameronsassman/PokeApi.git"
                      target="_blank"
                    >
                      <i className="fa-solid fa-code"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
