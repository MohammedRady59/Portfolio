import photo1 from "../../assets/Img/crud.png";
import next from "../../assets/Img/Next.png";
import vs from "../../assets/Img/Vs.png";
import photo2 from "../../assets/Img/custmor.png";
import photo3 from "../../assets/Img/footcap.png";
import photo4 from "../../assets/Img/frech.png";
import photo5 from "../../assets/Img/ftwk.png";
import photo6 from "../../assets/Img/gameover.png";
import photo7 from "../../assets/Img/plastine.png";
import photo8 from "../../assets/Img/yummy.png";
import { Github, Link, SquareArrowOutUpRight } from "lucide-react";
import { project } from "../../data";
function Work() {
  const images = [
    next,
    photo4,
    vs,
    photo1,
    photo5,
    photo7,
    photo6,
    photo8,
    photo3,
    photo2,
  ];
  return (
    <div className="bg-head ">
      <div className="container   ">
        <div className="  text-white md:py-60 py-10  font-nav ">
          <h2 className="flex items-center gap-2 md:text-3xl text-xl ">
            <div className="h-[2px] w-20 bg-white   "></div>
            <span className="text-customBlue ">03.</span>Projects
          </h2>
          <div className="py-4">
            <h2 className="text-2xl text-center text-white font-nav">
              Past Project Experience
            </h2>
            <p className="text-sm py-4 text-center text-[#9ca3af] font-nav">
              Explore how I consistently delivered maximum results in my
              previous projects.
            </p>
            <div className="grid gap-4 my-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {project.map((el, idx) => (
                <div
                  className="p-4 border-2 rounded-md border-customBlue flex flex-col gap-4 overflow-hidden"
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="flex justify-between">
                    <p className="text-customBlue">{el.name}</p>
                    <div className="flex gap-2">
                      <a
                        href={el.repo}
                        target="_blank"
                        className="block hover:text-customBlue "
                      >
                        <Github />
                      </a>
                      <a
                        href={el.demo}
                        target="_blank"
                        className="block hover:text-customBlue "
                      >
                        <SquareArrowOutUpRight />
                      </a>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 flex justify-center items-center bg-[#363737a3] translate-x-[120%] group-hover:translate-x-0 transition-all duration-300 ">
                      <a
                        href={el.demo}
                        target="_blank"
                        className="flex gap-2 text-xl"
                      >
                        LiveDemo <Link className="text-customBlue" />
                      </a>
                    </div>
                    <img
                      src={images[idx]}
                      alt={el.name}
                      loading="lazy"
                      className="block w-full rounded-md"
                    />
                  </div>
                  <div className="h-32 overflow-auto">
                    <p className="text-sm text-[#9ca3af] leading-6">
                      {el.details}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#9ca3af] ">{el.skills}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
