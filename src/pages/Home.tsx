import { useEffect } from "react";
import { Contact } from "../components/Contact";
import About from "../components/About";
import Banner from "../components/Banner";
import Post from "../components/Posts";
import Header from "../components/Header";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header home={true} />
      <main>
        <About />
        <Banner />
        <Post />
        <Contact />
      </main>
    </>
  );
};
