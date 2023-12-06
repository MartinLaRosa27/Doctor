import { useForm } from "@formspree/react";
import { toast } from "react-hot-toast";

export const Contact = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE);

  if (state.succeeded) {
    toast.success("Mensaje enviado con éxito!", {
      style: {
        background: "#333",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "80px",
      },
    });
  }

  return (
    <section id="contact" className="about py container">
      <div className="about-left text-center">
        <div className="section-head">
          <h2>Contacto</h2>
          <div className="border-line"></div>
        </div>

        <div className="form-contacto">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre completo"
              required
            />
            <textarea
              rows={3}
              placeholder="Mensaje"
              id="mensaje"
              name="mensaje"
              required
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};
