import React from "react";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Preview from "../components/Preview";
import Card from "../components/Card";
import Form from "../components/Form";

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

  return (
    <>
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
    </>
  );
}

export default Home;
