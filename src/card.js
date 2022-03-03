import "./styles.css";
import image from "./images/Profile.png";
import Email from "./Email";
import Linkedin from "./Linkedin";
import Footer from "./Footer";
function Card() {
  return (
    <div className="card-container">
      <img src={image} className="profile-photo"></img>
      <div className="info-container">
        <h1 className="profile-name">Laura Smith</h1>
        <p className="profile-stat">Frontend Developer</p>
        <p className="profile-web">Laurasmith.website</p>
        <div className="button-container">
          <Email />
          <Linkedin />
        </div>
        <h1>About</h1>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h1>Interests</h1>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Card;
