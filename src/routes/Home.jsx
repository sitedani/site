import Footer from "../components/Footer";

import { BiLogoLinkedin, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

import image1 from "../assets/1.jpeg";
import image4 from "../assets/portifolio.png";

const Home = () => {
  return (
    <>
      <main className="w-full mt-12  text-[#94857B]">
        <section className="w-full h-[980px]  flex items-center justify-center  ">
          <div className="w-full h-[820px] flex justify-center">
            <div className="w-[490px] h-[820px] p-8 bg-[#1F2122] rounded-3xl max-lg:hidden ">
              <img
                src={image1}
                alt="Minha imagem pessoal"
                className="w-full h-full "
              />
            </div>
            <div className="w-[490px] h-[820px] text-center p-8 bg-[#1F2122] rounded-3xl flex flex-col justify-center max-lg:w-[90%] items-center ">
              <h2 className="mb-2 text-8xl text-[#8F5D46]">Daniela</h2>
              <span className="mb-10">Jornalista|Redatora|Repórter</span>
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
        <section className="w-full h-[781px] flex bg-[#1F2122] max-lg:flex-col max-lg:h-full justify-center items-center max-lg:w-[90%] rounded-3xl">
          <div className="w-2/4 px-8  ">
            <img
              src={image4}
              alt="alguma imagem"
              className="w-full h-[781px] max-lg:h-full"
            />
          </div>
          <div className=" w-2/4 px-8 h-full text-center p-8 bg-[#1F2122] rounded-3xl flex flex-col justify-center ">
            <h2 className="mb-2 text-4xl text-[#8F5D46]">Portifólio</h2>
            <p className="text-justify mb-5">
              Aqui, neste espaço, convido você a explorar alguns desses
              conteúdos. Cada projeto é um reflexo do meu compromisso com a
              autenticidade, profundidade e inovação. Cada palavra escrita e
              cada imagem capturada são testemunhos do meu desejo de
              compartilhar o extraordinário e encontrar significado no
              aparentemente comum. Seja bem-vindo e descubra o mundo através dos
              meus olhos e palavras
            </p>
            <a
              href="https://cursoreportertv.com.br/novo/"
              target="_blank"
              rel="noreferrer"
              className="border mb-3"
            >
              <p>icone-Reporter-Tv</p>
            </a>
            <a
              href="https://www.rbtv.com.br/"
              target="_blank"
              rel="noreferrer"
              className=" border"
            >
              <p>icone-RBTV</p>
            </a>
          </div>
        </section>
        <section className="w-full h-[460px] flex flex-col items-center justify-center ">
          <div className="w-[980px] h-[340px] flex flex-col items-center justify-center max-lg:w-[90%] rounded-3xl gap-3 bg-[#1F2122]">
            <h2 className="uppercase text-4xl">CONTATO</h2>
            <p className="text-sm">E-mail: ⤵️</p>
            <p className="text-sm"> danielagentil@icloud.com</p>
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
