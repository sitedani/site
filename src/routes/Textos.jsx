import Footer from "../components/Footer";
import { textos } from "../data/data";

const Textos = () => {
  return (
    <main className="w-full flex flex-col mt-24 ">
      <section className="w-full h-64 bg-[#8F5D46]">
        <div className="flex flex-col items-center justify-center w-full h-full ">
          <p className="text-center w-9/12 text-[#FFFFFF] text-xl max-md:text-lg max-sm:text-base">
            Ao longo da minha jornada, publiquei textos para sites e blogs em
            diversos veículos, como Lab Dicas Jornalismo, OC Publicidade, Portal
            Vidro Impresso, Amelco, WR Glass e Meu Vidraceiro, entre outros.
          </p>
        </div>
      </section>

      <section className="w-full p-7">
        <div className="w-[100%] flex flex-wrap gap-6 items-center justify-center font-semibold">
          {textos.map((items) => {
            const { id, titulo, image, textoLink } = items;
            return (
              <div key={id} className="">
                <a
                  href={textoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-70"
                >
                  <div className="max-w-sm rounded overflow-hidden shadow-lg  w-[330px] h-[284px]flex flex-col">
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
