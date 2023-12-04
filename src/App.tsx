import Header from "./components/Header";
import "./App.scss";
import About from "./components/About";

function App() {
  return (
    <div className="doctorPortal">
      <Header />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
