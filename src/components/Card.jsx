import Image from "../images/photo-card.jpg"

function Card({ form, authorImage }) { //destructurin de props
  const {
    name,
    desc,
    slogan,
    repo,
    demo,
    autor,
    job,
  } = form;//destructuring de form(objeto)
 
    return(
        <section className="preview">
        <article className="card">
          <h2 className="card__projectTitle">
            <span className="card__projectTitle--text">
              tarjeta de proyecto personal
            </span>
          </h2>

          <div className="card__author">
            <div className="card__authorPhoto"><img src={ authorImage ||Image}/></div>
            <p className="card__job">{job || "Instructora de yoga"}</p>
            <h3 className="card__name">{autor || "Ainara González"}</h3>
          </div>

          <div className="card__project">
            <h3 className="card__name">{name || "Semillas de Yoga" }</h3>
            <p className="card__slogan">{slogan || "Conocerte a ti mismo es el comienzo de toda sabiduría."}</p>
            <h3 className="card__descriptionTitle">Descripción del producto:</h3>
            <p className="card__description">
              {desc || "El proyecto Semillas de Yoga está diseñado para promover la salud física, mental y emocional a través de la práctica regular de yoga. Nuestro objetivo es proporcionar a los participantes herramientas y técnicas que mejoren su calidad de vida y fomenten una conexión más profunda entre el cuerpo y la mente. Este programa inclusivo está adaptado para satisfacer las necesidades de todos, independientemente de su edad, experiencia o nivel de habilidad."}
            </p>

            <div className="card__technicalInfo">
              <p className="card__technologies">React JS - HTML - CSS</p>

              <a
                className="icon icon__www"
                href={demo || "#"}
                target="_blank"
                title="Haz click para ver el proyecto online"
              >
                Web link
              </a>
              <a
                className="icon icon__github"
                href={repo || "https://github.com"}
                target="_blank"
                title="Haz click para ver el código del proyecto"
              >
                GitHub link
              </a> 
             </div>
          </div>
        </article>
      </section>
    )
}

export default Card;