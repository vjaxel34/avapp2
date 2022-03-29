import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={classes.logo}>
        <img src="./images/lightBulb1.png" height="250px" />
      </div>
      <div className={classes.contact}>
        <h1>Contact Us</h1>
        <p>Call: +1 (336) 333 333</p>
        <p>Email: johny34@gmail.com</p>
        <p>Mon to Fri 11 pm - 7 am</p>
      </div>
      <div className={classes.visit}>
        <h1>Visit Us</h1>
        <p>Envoy So. California</p>
        <p>24 Honey, Ste</p>
        <p>Building 2</p>
      </div>
      <div className={classes.media}>
        <h1>Social Media</h1>
        <div>
          <a href="twitter.com/lang=en">
            <AiFillTwitterCircle /> amazing.av
          </a>
        </div>
        <div>
          <a href="github.com">
          <AiOutlineGithub /> avmedia34
          </a>
        </div>
        <div>
          <a href="instagram.com">
          <AiOutlineInstagram /> av_media
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
