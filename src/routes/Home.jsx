import Footer from "../components/Footer";

import image1 from "../assets/1.jpeg";
import image4 from "../assets/4.jpeg";

import {
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoTwitter,
  BiWorld,
  BiPlayCircle,
} from "react-icons/bi";

const Home = () => {
  return (
    <>
      <main className="w-full mt-4 text-[#94857B]">
        <section className="w-full h-full flex items-center justify-center ">
          <div className="w-full h-full flex flex-wrap justify-center  items-center py-5 mt-24">
            <div className="w-[490px] h-[820px] p-8 bg-[#1F2122] rounded-3xl max-lg:h-full max-lg:w-[90%]">
              <img
                src={image1}
                alt="Minha imagem pessoal"
                className="w-full h-full "
              />
            </div>
            <div className="w-[490px] h-[820px] text-center p-8 bg-[#1F2122] rounded-3xl flex flex-col justify-center max-lg:w-[90%] items-center ">
              <h2 className="mb-2 text-8xl text-[#8F5D46] max-md:text-7xl">
                Daniela
              </h2>
              <span className="mb-10">Jornalista | Redatora | Repórter</span>
              <p className="text-justify">
                Olá! Sou Daniela, uma jornalista em formação apaixonada pela
                arte da comunicação. Minha jornada profissional é uma mistura de
                experiências e uma busca constante por significado. Nessa
                jornada compartilhei histórias envolventes através de diferentes
                mídias e veículos. Desafiando-me a pensar de forma inovadora,
                busco transmitir mensagens poderosas para sites, blogs e
                veiculos de comunicação não apenas através das palavras, mas
                também por meio de imagens capturadas nas ruas durante minhas
                reportagens para canais de Comunicação e Entretenimento.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full h-full flex items-center justify-center ">
          <div className="w-full h-full flex flex-wrap justify-center  items-center py-5 mt-24">
            <div className="w-[490px] h-[820px] p-8 bg-[#1F2122] rounded-3xl max-lg:h-full max-lg:w-[90%]">
              <img
                src={image4}
                alt="Minha imagem pessoal"
                className="w-full h-full "
              />
            </div>
            <div className="w-[490px] h-[820px] text-center p-8 bg-[#1F2122] rounded-3xl flex flex-col justify-center max-lg:w-[90%] items-center ">
              <h2 className="mb-2 text-8xl text-[#8F5D46] max-md:text-6xl">
                Portifólio
              </h2>
              <p className="text-justify py-5">
                Aqui, neste espaço, convido você a explorar alguns desses
                conteúdos. Cada projeto é um reflexo do meu compromisso com a
                autenticidade, profundidade e inovação. Cada palavra escrita e
                cada imagem capturada são testemunhos do meu desejo de
                compartilhar o extraordinário e encontrar significado no
                aparentemente comum. Seja bem-vindo e descubra o mundo através
                dos meus olhos e palavras.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <a
                  href="https://cursoreportertv.com.br/novo/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flx-wrap gap-3 items-center justify-center border rounded-md p-2"
                >
                  <p>Curso Reporter de TV</p>
                  <BiWorld size={25} />
                </a>
                <a
                  href="https://www.rbtv.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flx-wrap gap-3 items-center justify-center border rounded-md p-2"
                >
                  <p>Rede Brasil</p>
                  <BiPlayCircle size={25} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full h-[460px] flex flex-col items-center justify-center ">
          <div className="w-[980px] h-[340px] flex flex-col items-center justify-center max-lg:w-[90%] rounded-3xl gap-3 bg-[#1F2122]">
            <h2 className="uppercase text-4xl">CONTATO</h2>
            <p className="text-sm">E-mail: ⤵️</p>
            <p className="text-sm">danielagentil@icloud.com</p>

            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/danielagentil/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/DanielaGentil1"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoTwitter size={20} />
              </a>
              <a
                href="https://instagram.com/danielagentill"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoInstagram size={20} />
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};
export default Home;
