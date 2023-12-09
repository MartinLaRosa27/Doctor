import { useEffect } from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Post from "../components/Posts";
import { Contact } from "../components/Contact";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <About />
      <Banner />
      <Post />
      <Contact />
    </main>
  );
};
