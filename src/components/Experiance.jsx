import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import mongodb from "../../public/mongodb.jpg";
import reactjs from "../../public/reactjs.png";
import cpp from "../../public/cpp.png";

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: oracle,
      name: "Oracle",
    },
    {
      id: 6,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 7,
      logo: reactjs,
      name: "React.js",
    },
    {
      id: 8,
      logo: cpp,
      name: "C++",
    },
  ];

  const workExperience = [
    {
      company: "TechTribe",
      position: "Web Development Intern",
      duration: "08/2023 - 09/2023",
      description:
        "Completion Certificate - Designed and implemented responsive web applications. Utilized Node.js and React.js for integration with MongoDB. Executed complex Node.js statements to optimize processes.",
    },
    {
      company: "Meta CraftLab",
      position: "Full Stack Developer Intern",
      duration: "06/2023 - 07/2024",
      description:
        "Internship Offer Letter - Collaborated on full stack development projects, contributing to frontend and backend solutions. Participated in team discussions, code reviews, and gained experience in agile development methodologies and version control systems.",
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <div className="mb-5">
          {workExperience.map((experience, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-xl font-bold">{experience.company}</h2>
              <p className="text-sm font-medium text-gray-600">
                {experience.position} - {experience.duration}
              </p>
              <p className="mt-2">{experience.description}</p>
            </div>
          ))}
        </div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <p className="  ">
          I've more than 1 years of experience in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
