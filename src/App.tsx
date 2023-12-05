import Header from "./components/Header";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Post from "./components/Posts";
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
    </div>
  );
}

export default App;
