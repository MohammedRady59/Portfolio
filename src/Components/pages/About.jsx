import Model from "../UI/Model";
import SkillCloud from "../UI/SkillCloud";
import me from "../../assets/Img/me.png";
function About() {
  return (
    <div className=" ">
      <div className="container h-[95vh] w-full flex items-center">
        <div className="flex md:justify-between justify-center items-center  flex-wrap md:flex-nowrap">
          <div className="text-white">
            <div
              className="items-center gap-4 flex md:text-3xl text-xl font-nav "
              data-aos="fade-right"
            >
              <div className="h-[2px] w-20 bg-white "></div>
              <h2>
                <span className="text-customBlue ">02.</span>About Me
              </h2>
            </div>
            <div data-aos="fade-up">
              <p className="text-[#9ca3af] font-nav  py-4 md:max-w-[50%]">
                I am Mohamed Rady Frontend Developer and I have experience in
                the field of web development and design
              </p>
              <p className="text-[#9ca3af] font-nav  py-4 md:max-w-[50%]">
                I am constantly striving to improve my skills and knowledge. I
                believe that ongoing training and personal projects are key to
                success. I am committed to staying up-to-date with the latest
                developments in my field and continuously expanding my knowledge
                and skills.
              </p>
            </div>
          </div>
          <div className=" " data-aos="fade-left">
            <img
              src={me}
              alt="my-image"
              className=" me  md:h-[300px]  md:w-[400px] w-[200px] h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className=" pb-8">
        <Model />
        <div className="items-center gap-4 flex text-3xl text-white mt-28 container font-nav ">
          <div className="h-[2px] w-20 bg-white "></div>
          <h2>Tech stack</h2>
        </div>
        <SkillCloud />
      </div>
    </div>
  );
}

export default About;
