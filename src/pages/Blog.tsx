import { useEffect } from "react";
import Header from "../components/Header";

export const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header home={false} />
      <section
        id="posts"
        className="posts py"
        style={{ paddingBottom: "75px" }}
      >
        <div className="container">
          <div className="section-head">
            <h2>Blog</h2>
            <div className="border-line"></div>
          </div>
          <div className="posts-inner grid">
            <article className="post-item bg-white">
              <div className="content">
                <h4>
                  Inspiring stories of person and family centered care during a
                  global pandemic.
                </h4>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor voluptas eius recusandae sunt obcaecati esse facere
                  cumque. Aliquid, cupiditate debitis.
                </p>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  quia ipsam, quis iure sed nulla.
                </p>
                <div className="info flex">
                  <small className="text text-sm">
                    <i className="fas fa-clock"></i> October 27, 2021
                  </small>
                </div>
              </div>
            </article>

            <article className="post-item bg-white">
              <div className="content">
                <h4>
                  Inspiring stories of person and family centered care during a
                  global pandemic.
                </h4>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor voluptas eius recusandae sunt obcaecati esse facere
                  cumque. Aliquid, cupiditate debitis.
                </p>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  quia ipsam, quis iure sed nulla.
                </p>
                <div className="info flex">
                  <small className="text text-sm">
                    <i className="fas fa-clock"></i> October 27, 2021
                  </small>
                </div>
              </div>
            </article>

            <article className="post-item bg-white">
              <div className="content">
                <h4>
                  Inspiring stories of person and family centered care during a
                  global pandemic.
                </h4>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor voluptas eius recusandae sunt obcaecati esse facere
                  cumque. Aliquid, cupiditate debitis.
                </p>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  quia ipsam, quis iure sed nulla.
                </p>
                <div className="info flex">
                  <small className="text text-sm">
                    <i className="fas fa-clock"></i> October 27, 2021
                  </small>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
