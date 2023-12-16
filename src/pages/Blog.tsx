import { useEffect } from "react";
import Header from "../components/Header";

export const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header home={false} />
      <main>
        <h1>Blog</h1>
      </main>
    </>
  );
};
