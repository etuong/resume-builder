import { createContext, useContext, useRef, useState } from "react";
import { getNewEducation, getNewWork, getNewProject } from "../utils/Utility";

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  const printElem = useRef();

  const [theme, setTheme] = useState("green.400");

  const [about, setAbout] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    picture: "",
  });

  const [educationList, setEducationList] = useState([getNewEducation()]);

  const [skills, setSkills] = useState([
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "ReactJS",
    },
    {
      id: 3,
      name: "NodeJS",
    },
    {
      id: 4,
      name: "MongoDB",
    },
    {
      id: 5,
      name: "ExpressJS",
    },
    {
      id: 6,
      name: "PHP",
    },
    {
      id: 7,
      name: ".Net",
    },
    {
      id: 8,
      name: "Java",
    },
    {
      id: 9,
      name: "RestAPI",
    },
    {
      id: 10,
      name: "jQuery",
    },
    {
      id: 11,
      name: "MySQL",
    },
    {
      id: 12,
      name: "Bootstrap",
    },
    {
      id: 13,
      name: "GitHub",
    },
    {
      id: 14,
      name: "HTML",
    },
    {
      id: 15,
      name: "CSS",
    },
  ]);

  const [workList, setWorkList] = useState([getNewWork()]);

  const [projects, setProjects] = useState([getNewProject()]);

  const value = {
    about,
    setAbout,
    educationList,
    setEducationList,
    skills,
    setSkills,
    workList,
    setWorkList,
    projects,
    setProjects,
    printElem,
    theme,
    setTheme,
  };

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};
