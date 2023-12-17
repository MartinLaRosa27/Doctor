import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { postsDB } from "../postsDB";
import Header from "../components/Header";

export const Blog = () => {
  let history = useHistory();

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
            {postsDB.map((post) => {
              return (
                <article
                  key={post.id}
                  style={{ marginBottom: "15px" }}
                  className="post-item bg-white"
                  onClick={() => history.push(`/posteo/${post.id}`)}
                >
                  <div className="content">
                    <h4>{post.titulo}</h4>
                    <p className="text text-sm">
                      {post.contenido.slice(0, 303)}
                      {post.contenido.length > 303 && "..."}
                    </p>
                    <div className="info flex">
                      <small className="text text-sm">
                        <i className="fas fa-clock"></i> {post.fecha}
                      </small>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
