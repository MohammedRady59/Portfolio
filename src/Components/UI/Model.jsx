import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { SquareChevronDown } from "lucide-react";

function Model() {
  return (
    <div className="container md:w-3/5 mx-auto font-nav">
      <TabGroup className="lg:flex space-y-5 lg:space-y-0 text-[#fff] gap-20">
        <TabList className="flex flex-col gap-4">
          <Tab className=" data-[selected]:bg-[#83dbff40]  data-[selected]:outline-none  p-3  border rounded-md border-customBlue">
            Education
          </Tab>
          <Tab className=" data-[selected]:bg-[#83dbff40] data-[selected]:outline-none   p-3 border rounded-md border-customBlue">
            Certification
          </Tab>
          <Tab className=" data-[selected]:bg-[#83dbff40]  data-[selected]:outline-none p-3 border rounded-md border-customBlue">
            Experiences
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div data-aos="fade-right">
              <h3 className="text-2xl pb-4">Education</h3>
              <div className="border-l px-2  ">
                <p className="bg-custom-gradient">2019 - 2023</p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  Faculty of Computer Science
                </p>
                <div className="px-8">
                  <p className="">Mansoura University</p>
                  <p className="py-2  text-[#9ca3af]">
                    I enrolled in the Computer science program with the
                    motivation that commercial jobs would be replaced by
                    technology in the future, so I decided to pursue this field
                    of study .
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div data-aos="fade-right">
              <h3 className="text-2xl pb-4">Certification</h3>
              <div className="border-l px-2  ">
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  <a
                    target="_blank"
                    className="text-[#9ca3af] hover:text-customBlue duration-300"
                    href="https://drive.google.com/file/d/1Tpq9DpbZA8y0i7NqI9QE7luNX9V1l4BL/view?usp=sharing"
                  >
                    Certificate Information Technology Institute In. Front End -
                    Vuejs(150 hrs.)
                  </a>
                </p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  <a
                    target="_blank"
                    className="text-[#9ca3af] hover:text-customBlue duration-300"
                    href="https://drive.google.com/file/d/1Tpq9DpbZA8y0i7NqI9QE7luNX9V1l4BL/view?usp=sharing"
                  >
                    The Frontend development diploma This course certified by
                    Route IT Training Center
                  </a>
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            {" "}
            <div data-aos="fade-right">
              <h3 className="text-2xl pb-4">Experiences</h3>
              <div className="border-l px-2  ">
                <p className="bg-custom-gradient">Aug 2024 - Present</p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  FONZTOP
                </p>
                <div className="px-8">
                  <p className="">Freelancer</p>
                  <p className="py-2 text-[#9ca3af]">
                    As a freelance developer, I worked on the{" "}
                    <a
                      href="https://foanztopkw.com/"
                      target="_blank"
                      className="text-customBlue "
                    >
                      FONZTOP
                    </a>{" "}
                    project, which specializes in mobile phone sales and
                    exchanges. My role involved developing and optimizing
                    various aspects of the project to improve its functionality
                    and user experience.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default Model;
