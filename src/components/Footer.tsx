import logo from "../assets/logo.webp";

const Footer = () => {
  return (
    <footer id="footer" className="footer text-center">
      <div className="container">
        <div className="footer-inner text-white py grid">
          <div className="footer-item">
            <div className="icon">
              <img src={logo} />
            </div>
            <p className="text text-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              saepe incidunt fugiat optio corporis ea!
            </p>
          </div>
        </div>

        <div className="footer-links">
          <p>Copyright 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
