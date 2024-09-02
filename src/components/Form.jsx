function Form({
  form,
  handleInput,
  handleImage,
  handleSubmit, //destructuring de props
  handleAuthorImg
}) {
  const {
    name,
    slogan,
    repo,
    technologies,
    demo,
    desc,
    autor,
    job,
    image,
    photo,
  } = form; //destructuring (form/objeto)

  return(
    <form className="addhtmlForm" onSubmit={handleSubmit}>
        <h2 className="title">Rellena tu formulario</h2>
        <fieldset className="addhtmlForm__group">
          <legend className="addhtmlForm__title">
            Cuéntanos sobre el proyecto
          </legend>

          <input
            className="addhtmlForm__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre del proyecto"
            value={name}
            onChange={handleInput}
            required
          />

          <input
            className="addhtmlForm__input"
            type="text"
            name="slogan"
            id="slogan"
            value={slogan}
            placeholder="Slogan"
            onChange={handleInput}
            required
          />

          <div className="addhtmlForm__2col">
            <input
              className="addhtmlForm__input"
              type="url"
              name="repo"
              id="repo"
              value={repo}
              placeholder="Repositorio"
              onChange={handleInput}
              required
            />

            <input
              className="addhtmlForm__input"
              type="url"
              name="demo"
              id="demo"
              value={demo}
              placeholder="Demo"
              onChange={handleInput}
              required
            />
          </div>

          <input
            className="addhtmlForm__input"
            type="text"
            name="technologies"
            id="technologies"
            value={technologies}
            placeholder="Tecnologías"
            onChange={handleInput}
            required
          />

          <textarea
            className="addhtmlForm__input"
            type="text"
            name="desc"
            id="desc"
            placeholder="Descripción"
            rows="5"
            onChange={handleInput}
            value={desc}
            required
          />
        </fieldset>

        <fieldset className="addhtmlForm__group">
          <legend className="addhtmlForm__title">
            Cuéntanos sobre la autora
          </legend>
          <input
            className="addhtmlForm__input"
            type="text"
            name="autor"
            id="autor"
            value={autor}
            placeholder="Nombre"
            onChange={handleInput}
            required
          />
         
          <input
            className="addhtmlForm__input"
            type="text"
            name="job"
            id="job"
            value={job}
            placeholder="Trabajo"
            onChange={handleInput}
            required
          />
 </fieldset>
 <fieldset className="addhtmlForm__group--upload">
        <label htmlFor="image" className="button">
          Subir foto del proyecto
        </label>
        <input
          className="addhtmlForm__hidden"
          type="file"
          name="image"
          id="image"
          onChange={handleImage}
        />
        <label htmlFor="photo" className="button">
          Subir foto de la autora
        </label>
        <input
          className="addhtmlForm__hidden"
          type="file"
          name="photo"
          id="photo"
          onChange={handleAuthorImg}
        />
      </fieldset>
      <input type="submit" value="Guardar proyecto"  className="button--large"/>
          
      </form>

  )
}

export default Form;