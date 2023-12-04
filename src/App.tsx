import Header from "./components/Header";
import "./App.scss";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="doctorPortal">
      <Header />
      <main>
        <About />
        <Banner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
