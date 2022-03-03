import "./styles.css";
import image from "./images/Profile.png";
import Email from "./Email";
import Linkedin from "./Linkedin";
function Card() {
  return (
    <div>
      <img src={image} className="profile-photo"></img>
      <div>
        <h1>Laura Smith</h1>
        <p>Frontend Developer</p>
        <p>Laurasmith.website</p>
        <div className="button-container">
          <Email />
          <Linkedin />
        </div>
      </div>
    </div>
  );
}

export default Card;
