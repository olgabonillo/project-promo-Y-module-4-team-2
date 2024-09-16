import React from "react";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Preview from "../components/Preview";
import Card from "../components/Card";
import Form from "../components/Form";
import { Link } from "react-router-dom";

function Home() {
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

  const [cardUrl, setCardUrl] = useState(null);

  useEffect(() => {
    const localStorageForm = localStorage.getItem("form");

    if (localStorageForm !== null) {
      setForm(JSON.parse(localStorageForm));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:5002/projects", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "name":form.autor,
        "job": form.job,
        "photo":authorImage,
        "proyectName": form.name,
        "description": form.desc,
        "slogan":form.slogan,
        "tecnologies": form.technologies, 
        "image":projectImage,
        "github":form.repo,
        "demo":form.demo
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCardUrl(data.cardUrl);
      })
      .catch((error) => {
        console.log(error);
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

  return (
    <>
    <Hero />
    <main className="main">
      <div className="card-column">
        <Preview src={projectImage} />
        <Card form={form} authorImage={authorImage} />
        {/* URLCARD */}
        {cardUrl && <Link to={cardUrl} target="_blank">Pincha aqui para ver tu tarjeta</Link>} 
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
    </>
  );
}

export default Home;
