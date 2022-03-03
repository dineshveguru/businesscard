import "./styles.css";
import Giticon from "./images/github.png";
import Insicon from "./images/insicon.png";
import Linkicon from "./images/Linkicon.png";
import Twiicon from "./images/Twiicon.png";

function Footer() {
  return (
    <div className="footer-container">
      <img src={Giticon}></img>
      <img src={Insicon}></img>
      <img src={Linkicon}></img>
      <img src={Twiicon}></img>
    </div>
  );
}

export default Footer;
