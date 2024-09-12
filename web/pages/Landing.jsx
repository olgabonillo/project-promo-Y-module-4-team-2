import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { useState } from "react";

function Landing() {
  const [projects, setProjects] = useState([]);

  async function getProjects() {
    // El fetch con try-catch para errores y
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
  };

  // useEffect para que el fetch se ejecute una sola vez 
  useEffect(() => {
    getProjects();
  }, []);
 
  return (
    <>
      <Hero />

      <header className="grid-wrap">
          {projects.map((project) => (
            <section class="preview" key={project.id}>
              <div class="projectImage"></div>
              <article class="card">
              <h2 class="card__projectTitle">
                <span class="card__projectTitle--text">
                  tarjeta de proyecto personal
                </span>
              </h2>

              <div class="card__author">
                <div class="card__authorPhoto">
                  <img src={project.photo} />
                </div>
                <p class="card__job">{project.job}</p>
                <h3 class="card__name">{project.name}</h3>
              </div>

              <div class="card__project">
                <h3 class="card__name">{project.projectName}</h3>
                <p class="card__slogan">
                  {project.slogan}
                </p>
                <h3 class="card__descriptionTitle">Descripción del producto:</h3>
                <p class="card__description">
                  {project.description}
                </p>

                <div class="card__technicalInfo">
                  <p class="card__technologies">{project.technologies}</p>

                  <a
                    class="icon icon__www"
                    href={project.web}
                    title="Haz click para ver el proyecto online"
                  >
                    Web link
                  </a>
                  <a
                    class="icon icon__github"
                    href="#"
                    title="Haz click para ver el código del proyecto"
                  >
                    GitHub link
                  </a>
                </div>
              </div>
            </article>
          </section>
        ))}
      </header>
    </>
  );
}

export default Landing;
