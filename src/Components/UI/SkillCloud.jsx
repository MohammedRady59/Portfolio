import { useEffect } from "react";
import TagCloud from "TagCloud";

function SkillCloud() {
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Jquery",
      "TypeScript",
      "TailwindCSS",
      "NextJS",
      "SASS",
      "ReactJS",
      "React-Rouder-Dom",
      "Redux",
      "GIT",
      "GITHUB",
      "Postman",
    ];

    const options = {
      radius: 300,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    TagCloud(container, texts, options);
    return () => {
      const cloudContainer = document.querySelector(container);
      if (cloudContainer) {
        cloudContainer.innerHTML = "";
      }
    };
  }, []);
  return (
    <div className=" relative top-0 flex justify-center items-center md:w-full   ">
      <span className="tagcloud block top-0 left-0 font-semibold text-lg tracking-wide "></span>
    </div>
  );
}

export default SkillCloud;
