import title from "../images/title2.png";
import { Link } from "react-router-dom";


function Hero() {
    return(
        <div className="hero">
        {/* <h2 className="title">Proyectos molones</h2> */}  <div className="titlecontainer"><img className="titlephoto" src={title} alt="title" />    </div>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <Link  to="/project-promo-Y-module-3-team-2/home" type="submit" value="nuevo proyecto"  className="button--large button--link">Nuevo Proyecto</Link>
        {/* <a className="button--link" href="./">
          Ver proyectos
        </a> */}
        </div>
    )
}

export default Hero;