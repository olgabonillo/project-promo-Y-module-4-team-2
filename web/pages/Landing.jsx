import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { useState } from "react";
import { Link } from "react-router-dom";

function Landing() {
  const [projects, setProjects] = useState([]);

  async function getProjects() {
    // El fetch con try-catch para errores
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/projects`);

      if (response.ok) {
        const datos = await response.json();

        console.log(datos);
        setProjects(datos.result);
      }
    } catch (e) {
      console.log(e);
    }
  }

  // useEffect para que el fetch se ejecute una sola vez
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <Hero />
      <Link  to="/home" type="submit" value="nuevo proyecto"  className="button--large button-project">Nuevo proyecto</Link>
      <header className="grid-wrap">
        {projects.map((project) => (
          <div className="preview" key={project.id}>
            <div className="projectImage"></div>
            <div className="card">
                <div className="card__author">
                  <div className="card__authorPhoto">
                    <img src={project.photo} />
                  </div>
                  <p className="card__job">{project.job}</p>
                  <h3 className="card__name">{project.name}</h3>
                </div>

                <div className="card__project">
                  <h2 className="card__projectTitle">
                    <span className="card__projectTitle--text">
                      tarjeta de proyecto personal
                    </span>
                  </h2>
                  <div>
                    <h3 className="card__name">{project.name}</h3>
                    <p className="card__slogan">{project.slogan}</p>
                  </div>
                  <div>
                    <h3 className="card__descriptionTitle">
                      Descripción del producto:
                    </h3>
                    <p className="card__description">{project.description}</p>
                  </div>
                  <div className="card__technicalInfo">
                    <p className="card__technologies">{project.technologies}</p>

                    <a
                      className="icon icon__www"
                      href={project.demo}
                      target="_blank"
                      title="Haz click para ver el proyecto online"
                    >
                      Web
                    </a>
                    <a
                      className="icon icon__github"
                      href={project.gitHub}
                      target="_blank"
                      title="Haz click para ver el código del proyecto"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
            </div>
          </div>
        ))}
      </header>
    </>
  );
}

export default Landing;
