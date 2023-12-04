import Header from "./components/Header";
import "./App.scss";
import About from "./components/About";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="doctorPortal">
      <Header />
      <main>
        <About />
        <Banner />
      </main>
    </div>
  );
}

export default App;
