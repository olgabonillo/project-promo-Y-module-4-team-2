import title from "../images/title2.png";


function Hero() {
    return(
        <div className="hero">
        {/* <h2 className="title">Proyectos molones</h2> */}  <div className="titlecontainer"><img className="titlephoto" src={title} alt="title" />    </div>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <a className="button--link" href="./">
          Ver proyectos
        </a>
        </div>
    )
}

export default Hero;