import logo from "../images/logo-adalab.png";
import logo2 from "../images/logo2.png";


function Header() {
    return(
        <header className="header">
        <a
          className="header__brand"
          href="./"
          title="Haz click para volver a la página inicial"
        >
          <img
            className="header__companyLogo"
            src={logo2}
            alt="Logo proyectos molones"
          />
         
          {/* <h1 className="header__title">Proyectos molones</h1> */}
        </a>
        <img className="logoSponsor2" src={logo} alt="Logo Adalab" />
         
      </header>
    )
}

export default Header;