import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div>
          <div>
            <p>Services</p>
          </div>
          <div>
            <small>Emergency Dental Care</small>
            <br />
            <small>Check Up</small>
            <br />
            <small>Treatment of Personal Diseases</small>
            <br />
            <small>Tooth Extraction</small>
            <br />
            <small>Check Up</small>
          </div>
        </div>
        <div>
          <div>
            <p>Oral Health</p>
          </div>
          <div>
            <small>Emergency Dental Care</small>
            <br />
            <small>Check Up</small>
            <br />
            <small>Treatment of Personal Diseases</small>
            <br />
            <small>Tooth Extraction</small>
            <br />
            <small>Check Up</small>
          </div>
        </div>
        <div>
          <div>
            <p>Our Address</p>
          </div>
          <div>
            <small>Bsrisal, Bangladesh</small>
            <div className="brandIcon">
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <small>Call Now</small>
            <p className="callNow">+8809638164898</p>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <small>Copyright 2023</small>
      </div>
    </div>
  );
};

export default Footer;
