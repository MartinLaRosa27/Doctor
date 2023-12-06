import About from "../components/About";
import Banner from "../components/Banner";
import Post from "../components/Posts";
import { Contact } from "../components/Contact";

export const Home = () => {
  return (
    <main>
      <About />
      <Banner />
      <Post />
      <Contact />
    </main>
  );
};
