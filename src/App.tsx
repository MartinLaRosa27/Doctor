import { FloatingWhatsApp } from "react-floating-whatsapp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import Footer from "./components/Footer";
import perfil from "./assets/perfil.webp";
import "./App.scss";
import { Posteo } from "./pages/Posteo";

function App() {
  return (
    <div className="doctorPortal">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/posteo/:id">
            <Posteo />
          </Route>
          <Route exact path="*">
            <Home />
          </Route>
        </Switch>

        <Footer />
        <FloatingWhatsApp
          phoneNumber={import.meta.env.VITE_NUMERO}
          accountName="Martín La Rosa"
          avatar={perfil}
          statusMessage="En línea"
          chatMessage="¿Hola, como puedo ayudarte?"
          placeholder="Escribe un mensaje"
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
