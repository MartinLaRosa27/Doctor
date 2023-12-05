import { FloatingWhatsApp } from "react-floating-whatsapp";
import Header from "./components/Header";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Post from "./components/Posts";
import perfil from "./assets/perfil.webp";
import "./App.scss";

function App() {
  return (
    <div className="doctorPortal">
      <Header />
      <main>
        <About />
        <Banner />
        <Post />
      </main>
      <Footer />
      <FloatingWhatsApp
        phoneNumber={import.meta.env.VITE_NUMERO}
        accountName="Alicia Schiraldi"
        avatar={perfil}
        statusMessage="En línea"
        chatMessage="¿Hola, como puedo ayudarte?"
        placeholder="Escribe un mensaje"
      />
    </div>
  );
}

export default App;
