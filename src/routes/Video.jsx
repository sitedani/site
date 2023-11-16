import { videos } from "../data/data";
import Footer from "../components/Footer";

import image from "../assets/banner.png";

const Video = () => {
  return (
    <main className="w-full flex flex-col mt-24">
      <section
        className="bg-black w-full h-96"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          WebkitBackgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full  ">
          <p className="text-white text-center w-9/12 text-2xl max-md:text-lg">
            Ao longo da minha jornada fui me especializando na construção de
            reportagens, boletins, stand-up, links, offs, sonoras, passagens; e
            pretendo aprender a arte da edição e decupagem em breve.
          </p>
        </div>
      </section>
      <section className="w-full p-7">
        <div className="w-[100%] flex flex-wrap gap-6 items-center justify-center">
          {videos.map((videos) => {
            const { id, video } = videos;
            return (
              <div
                key={id}
                className="max-w-sm rounded overflow-hidden shadow-lg"
              >
                <iframe
                  width="384px"
                  height="284px"
                  src={video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default Video;
