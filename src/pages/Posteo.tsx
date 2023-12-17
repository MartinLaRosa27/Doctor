import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postsDB } from "../postsDB";
import Header from "../components/Header";

export const Posteo = () => {
  const { id }: any = useParams();
  const [postSelected, setPosteoSelected] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    postsDB.map((post) => {
      if (post.id == id) {
        setPosteoSelected(post);
      }
    });
  }, []);

  return (
    <>
      <Header home={false} />
      <section
        id="posts"
        className="posts py"
        style={{ paddingBottom: "75px", minHeight: "100vh" }}
      >
        {postSelected ? (
          <div className="container">
            <div className="section-head">
              <h2>{postSelected.titulo}</h2>
              <div className="border-line">
                <small className="text text-sm">{postSelected.fecha}</small>
              </div>
            </div>
            <div className="posts-inner">
              <p className="text" style={{ fontSize: "2rem" }}>
                {postSelected.contenido}
              </p>
            </div>
          </div>
        ) : (
          <h2
            style={{
              margin: "auto",
              textAlign: "center",
              textTransform: "lowercase",
            }}
          >
            No se encontro el posteo seleccionado
          </h2>
        )}
      </section>
    </>
  );
};
