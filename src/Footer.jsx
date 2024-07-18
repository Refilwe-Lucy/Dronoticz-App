import facebook from "./pictures/facebook.jpg";
import linkedin from "./pictures/linkedin.jpg";
import pintrest from "../src/pictures/pinterest.jpg";

function Last() {
  return (
    <div className="footer">
      <div className="social-icons">
        <img className="icons" src={facebook} alt="" />
        <img className="icons" src={linkedin} alt="" />
        <img className="icons" src={pintrest} alt="" />
      </div>
      <div className="lastfooter">
        
        <p className="footer-subscribe">ABOUT <span>ARTICLES</span> </p>
       
        
      </div>
      <button className="last-suscribe">Suscribe</button>
    </div>
  );
}

export default Last;
