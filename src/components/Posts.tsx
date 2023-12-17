import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { postsDB } from "../postsDB";

const Post = () => {
  let history = useHistory();

  return (
    <section id="posts" className="posts py">
      <div className="container">
        <div className="section-head">
          <h2>Blog</h2>
          <div className="border-line"></div>
        </div>
        <div className="posts-inner grid">
          {postsDB.slice(0, 3).map((post) => {
            return (
              <article
                key={post.id}
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

        <h3 className="show-more">
          <NavLink to={`/blog`}>Ver más</NavLink>
        </h3>
      </div>
    </section>
  );
};

export default Post;
