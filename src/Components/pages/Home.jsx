import Typed from "typed.js";
import An from "../An";
import { useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
function Home() {
  useEffect(() => {
    const options = {
      strings: ["FRONTEND DEVELOPER", "WEB DEVELOPER"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    };

    const typed = new Typed(".moveLetter", options);

    // Clean up on component unmount
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="h-screen w-full flex  ">
      <An />
      <div className="container text-white  flex flex-col justify-center">
        <p className="text-xl text-customBlue py-4">Hi, my name is</p>
        <h1
          className="name font-lota cursor-fancy text-xl md:text-7xl"
          data-aos="fade-right"
        >
          MOHAMEDRADY
        </h1>
        <h1 className="text-white text-xl md:text-3xl py-4 font-bold ">
          I AM A <span className="moveLetter text-customBlue"></span>
        </h1>
        <a
          href="https://drive.google.com/file/d/1vzdTMYd8dhaDNOLbjlezoap2ln1EedfI/view?usp=sharing"
          target="_blank"
          className="w-fit"
        >
          <button
            className="my-6 p-4 font-bold cv z-10  border-2  cursor-fancy rounded-[0.3rem] transition-all duration-700 ease-out  block relative border-customBlue"
            type="button"
          >
            View My CV Here!
          </button>
        </a>
        <div className="icons flex gap-4 my-8 ">
          <a
            href="https://github.com/MohammedRady59"
            target="_blank"
            className="hover:translate-y-4 block transition-all duration-300 "
          >
            <Github size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-rady-504192289"
            target="_blank"
            className="hover:translate-y-4  block transition-all duration-300"
          >
            <Linkedin size={32} />
          </a>
          <a
            href={`https://wa.me/+2001280761258`}
            target="_blank"
            className="hover:translate-y-4  block transition-all duration-300"
          >
            <svg
              width="28px"
              height="28px"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
          <a
            href="mailto:mrady0772@gmail.com"
            target="_blank"
            className="hover:translate-y-4  block transition-all duration-300"
          >
            <Mail size={32} />
          </a>
        </div>
        <div className="text-center absolute  left-1/2 bottom-5 -translate-y-1/2 -translate-x-1/2">
          <p>Build by Mohamed Rady ♡</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
