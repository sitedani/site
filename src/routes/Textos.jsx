import Footer from "../components/Footer";
import { textos } from "../data/data";

import image from "../assets/fundo-texto.jpg";
const Textos = () => {
  return (
    <main className="w-full flex flex-col mt-24">
      <section
        className="w-full h-64"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full ">
          <p className="text-black text-center w-9/12">
            Ao longo da minha jornada, publiquei textos para sites e blogs em
            diversos veículos, como Lab Dicas Jornalismo, OC Publicidade, Portal
            Vidro Impresso, Amelco, WR Glass e Meu Vidraceiro, entre outros.
          </p>
        </div>
      </section>
      <section className="w-full p-7">
        <div className="w-[100%] flex flex-wrap gap-6 items-center justify-center">
          {textos.map((items) => {
            const { id, titulo, image, textoLink } = items;
            return (
              <div key={id}>
                <a
                  href={textoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-70"
                >
                  <div className="max-w-sm rounded overflow-hidden shadow-lg border border-black w-[384px] h-[284px]flex flex-col">
                    <img
                      src={image}
                      alt={titulo}
                      className="w-full h-[240px]"
                    />
                    <h3 className="w-full text-center py-3">{titulo}</h3>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default Textos;
