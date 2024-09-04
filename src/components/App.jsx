import "../scss/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Landing from "../pages/Landing";
import { Route, Routes } from "react-router-dom";

function App() {
  /* const handleImage = (event) => {
      // setImage(event.target.value);
      setImage(event.currentTarget.files[0])
    };
    if (event.currentTarget.files.length > 0) {
      const myFile = event.currentTarget.files[0];

      // añado un evento load al manejador de ficheros
      // por qué añado un evento, pues porque esto es una acción asíncrona, imaginemos que el fichero pesa 5 Gb, el navegador puede tardar unos cuantos segundos en cargar y procesar el fichero, por eso le decimos "navegador, cuando termines de cargar el fichero me ejecutas el método  image"
      fr.addEventListener('load', getImage);

      // le digo al manejador de ficheros que maneje, que cargue el fichero
      fr.readAsDataURL(myFile);
    }
    // si la usuaria no ha elegido ningún fichero y ha puslado en cerrar la ventana de nuestro ordenador, no hago nada
 
  
    const handlePhoto = (event) => {
      setPhoto(event.target.value);
    };
*/

  return (
    <div className="body">
      <Header />
     
      <Routes>
        <Route path="/project-promo-Y-module-3-team-2/" element={<Landing />} />

        <Route
          path="/project-promo-Y-module-3-team-2/home"
          element={<Home />}
        />

        <Route
          path="/project-promo-Y-module-3-team-2/detail"
          element={<Detail />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
