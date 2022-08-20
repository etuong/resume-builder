export const generateKey = (pre = "") => {
  return `${pre}_${new Date().getTime()}`;
};

export const getNewEducation = () => {
  return {
    id: generateKey(),
    degree: "",
    school: "",
    startYr: 0,
    endYr: 0,
    grade: "",
  };
};

export const getNewWork = () => {
  return {
    id: generateKey(),
    position: "",
    company: "",
    type: "",
    startDate: "",
    endDate: "",
    description: "",
  };
};

export const getNewProject = () => {
  return {
    id: generateKey(),
    name: "",
    description: "",
    url: "",
  };
};
