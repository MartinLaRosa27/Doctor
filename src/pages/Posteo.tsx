import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

export const Posteo = () => {
  const { id }: any = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header home={false} />
      <section
        id="posts"
        className="posts py"
        style={{ paddingBottom: "75px", minHeight:"100vh" }}
      >
        <div className="container">
          <div className="section-head">
            <h2>
              Inspiring stories of person and family centered care during a
              global pandemic.
            </h2>
            <div className="border-line">
              <small className="text text-sm">October 27, 2026</small>
            </div>
          </div>
          <div className="posts-inner">
            <p className="text" style={{fontSize:"2rem"}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
              voluptas eius recusandae sunt obcaecati esse facere cumque.
              Aliquid, cupiditate debitis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nobis quia ipsam, quis iure sed
              nulla.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
