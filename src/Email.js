import "./styles.css";
import email from "./images/Mail.png";

function Email() {
  return (
    <div className="email-button">
      <img src={email}></img>
      <p>Email</p>
    </div>
  );
}

export default Email;
