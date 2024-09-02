import { useEffect, useState } from "react";
import "../scss/App.scss";
import Header from "./Header";
import Hero from "./Hero";
import Preview from "./Preview";
import Card from "./Card";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  const [form, setForm] = useState({
    name: "",
    slogan: "",
    technologies: "",
    repo: "",
    demo: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: "",
  }); //objeto

  useEffect(() => {
    const localStorageForm = localStorage.getItem("form");

    if (localStorageForm !== null) {
      setForm(JSON.parse(localStorageForm));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    form.photo =
      "https://static.wikia.nocookie.net/minion/images/3/34/Los_Minions.jpg/revision/latest?cb=20240201133153&path-prefix=es";
    form.image =
      "https://static.wikia.nocookie.net/minion/images/3/34/Los_Minions.jpg/revision/latest?cb=20240201133153&path-prefix=es";

    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleInput = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    setForm({ ...form, [key]: value });

    localStorage.setItem("form", JSON.stringify(form));
  }; //evento general para todos los inputs

  const [projectImage, setProjectImage] = useState("");

  const handleImage = (e) => {
    //fotografía
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result && typeof reader.result === "string") {
        setProjectImage(reader.result.toString());
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const [authorImage, setauthorImage] = useState("");

  const handleAuthorImg = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result && typeof reader.result === "string") {
        setauthorImage(reader.result.toString());
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

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

      <Hero />
      <main className="main">
        <div className="card-column">
          <Preview src={projectImage} />
          <Card form={form} authorImage={authorImage} />
        </div>
        <div>
          <Form
            form={form}
            handleInput={handleInput}
            handleImage={handleImage}
            handleSubmit={handleSubmit}
            handleAuthorImg={handleAuthorImg}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
