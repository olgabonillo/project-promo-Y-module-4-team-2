import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { useState } from "react";

function Landing() {
  const [projects, setProjects] = useState([]);

  async function getProjects() {
    // El fetch con try-catch para errores
    try {
      const response = await fetch("http://localhost:5002/projects");

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

      <header className="grid-wrap">
        {projects.map((project) => (
          <div className="preview" key={project.id}>
            <div className="projectImage"></div>
            <div className="card">
                <div className="card__author">
                  <div className="card__authorPhoto">
                    <img src={project.image} />
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
                    <h3 className="card__name">{project.proyectName}</h3>
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
                      title="Haz click para ver el proyecto online"
                    >
                      Web link
                    </a>
                    <a
                      className="icon icon__github"
                      href={project.github}
                      title="Haz click para ver el código del proyecto"
                    >
                      GitHub link
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
