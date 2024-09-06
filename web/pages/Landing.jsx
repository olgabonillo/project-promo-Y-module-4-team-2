import React from "react";
import Hero from "../components/Hero";
import ImageOne from "../images/foto-3.jpg";
import ImageTwo from "../images/foto-4.jpg";
import ImageThree from "../images/foto-2.jpg";
<q></q>;
import ImageFour from "../images/foto-1.png";

function Landing() {
  return (
    <>
      <Hero />

      <header className="grid-wrap">
        <section class="preview">
          <div class="projectImage"></div>
          <article class="card">
            <h2 class="card__projectTitle">
              <span class="card__projectTitle--text">
                tarjeta de proyecto personal
              </span>
            </h2>

            <div class="card__author">
              <div class="card__authorPhoto">
                <img src={ImageOne} />
              </div>
              <p class="card__job">Educadora infantil</p>
              <h3 class="card__name">Olga Bonillo</h3>
            </div>

            <div class="card__project">
              <h3 class="card__name">Escuela infantil Nadons</h3>
              <p class="card__slogan">
                Nuestra pasión es que los más peques sean grandes personas.
              </p>
              <h3 class="card__descriptionTitle">Descripción del producto:</h3>
              <p class="card__description">
                Pioneros en educación infantil de 0 a 3 años desde hace mas de
                40 años. Llevamos a cabo nuestro propio proyecto educativo con
                una metodología basada en el juego y en actividades de pedagogía
                activa adaptada al nivel madurativo de cada niño o niña.
              </p>

              <div class="card__technicalInfo">
                <p class="card__technologies">React JS - HTML - CSS</p>

                <a
                  class="icon icon__www"
                  href="#"
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

        <section class="preview">
          <div class="projectImage"></div>
          <article class="card">
            <h2 class="card__projectTitle">
              <span class="card__projectTitle--text">
                tarjeta de proyecto personal
              </span>
            </h2>

            <div class="card__author">
              <div class="card__authorPhoto">
                <img src={ImageTwo} />
              </div>
              <p class="card__job">Atención técnica sanitaria</p>
              <h3 class="card__name">Gema López</h3>
            </div>

            <div class="card__project">
              <h3 class="card__name">Residencia de mayores Santa Elena</h3>
              <p class="card__slogan">
                Cuidar de los más mayores es nuestro mayor honor.
              </p>
              <h3 class="card__descriptionTitle">Descripción del producto:</h3>
              <p class="card__description">
                La residencia de mayores Santa Elena da cobertura a todas las
                necesidades de los mayores, no solo asistenciales, si no desde
                el punto de vista integral, donde el afecto y el cariño juegan
                un papel determinante en la cotidianidad de los mayores,
                haciéndoles participes de la vida del Centro, mediante su
                implicación en las actividades de ocio, no solo como distracción
                sino como terapia para mantener sus capacidades físicas y
                cognitivas en las mejores condiciones posibles.
              </p>

              <div class="card__technicalInfo">
                <p class="card__technologies">React JS - HTML - CSS</p>

                <a
                  class="icon icon__www"
                  href="#"
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

        <section class="preview">
          <div class="projectImage"></div>
          <article class="card">
            <h2 class="card__projectTitle">
              <span class="card__projectTitle--text">
                tarjeta de proyecto personal
              </span>
            </h2>

            <div class="card__author">
              <div class="card__authorPhoto">
                <img src={ImageThree} />
              </div>
              <p class="card__job">Técnico de sistemas microinformáticos</p>
              <h3 class="card__name">Francisco Nebot</h3>
            </div>

            <div class="card__project">
              <h3 class="card__name">Hardware World</h3>
              <p class="card__slogan">
                Dispuestos a resolver todos tus problemas.
              </p>
              <h3 class="card__descriptionTitle">Descripción del producto:</h3>
              <p class="card__description">
                Con un equipo conformado por especialistas en diferentes
                disciplinas tecnológicas, disponemos de un taller de servicios
                informáticos, basado especialmente en la reparación y venta de
                ordenadores, impresoras, portátiles, monitores, mantenimiento de
                parques informáticos a empresas, etc, así como en la
                programación y diseño de páginas web, instalaciones de redes y,
                en general, centrados muy especialmente en atender cualquier
                necesidad que pudieran tener nuestros clientes en cuanto a su
                estructura informática y tecnológica.
              </p>

              <div class="card__technicalInfo">
                <p class="card__technologies">React JS - HTML - CSS</p>

                <a
                  class="icon icon__www"
                  href="#"
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

        <section class="preview">
          <div class="projectImage"></div>
          <article class="card">
            <h2 class="card__projectTitle">
              <span class="card__projectTitle--text">
                tarjeta de proyecto personal
              </span>
            </h2>

            <div class="card__author">
              <div class="card__authorPhoto">
                <img src={ImageFour} />
              </div>
              <p class="card__job">Técnico especialista DevOps</p>
              <h3 class="card__name">Javier Izquierdo</h3>
            </div>

            <div class="card__project">
              <h3 class="card__name">DevOps BBVA</h3>
              <p class="card__slogan">
                Soluciones rápidas a problemas difíciles.
              </p>
              <h3 class="card__descriptionTitle">Descripción del producto:</h3>
              <p class="card__description">
                DevOps es un conjunto general de prácticas flexibles de creación
                y entrega de software que buscan cerrar la brecha entre el
                desarrollo de software y las operaciones de TI, que son dos
                esfuerzos críticos pero que a menudo no están alineados. No se
                trata de una tecnología específica, sino de un enfoque táctico.
                Al trabajar juntos, los equipos de desarrollo y operaciones
                pueden eliminar obstáculos y centrarse en mejorar la creación,
                la implementación y el monitoreo continuo del software.
              </p>

              <div class="card__technicalInfo">
                <p class="card__technologies">React JS - HTML - CSS</p>

                <a
                  class="icon icon__www"
                  href="#"
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
      </header>
    </>
  );
}

export default Landing;
