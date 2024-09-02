import preview from "../images/photo-principal.jpg";

function Preview({src}) {
    return(
        <img className="projectImage" src={src || preview} alt="mujer diseñando con un pincel" />
    )
}

export default Preview;