import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { useResume } from "../../contexts/ResumeContext";
import { getNewProject } from "../../utils/Utility";

const Projects = () => {
  const { projects, setProjects } = useResume();

  const addMore = () => {
    setProjects((projects) => [...projects, getNewProject()]);
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    const updatedProject = projects.map((project) =>
      project.id === id
        ? Object.assign(project, { id: uuidv4(), [name]: value })
        : project
    );
    setProjects(updatedProject);
  };

  const handleDelete = (selectedIndex) => {
    setProjects((projects) =>
      projects.filter((_, index) => index !== selectedIndex)
    );
  };

  return (
    <>
      <Accordion allowToggle defaultIndex={[0]}>
        {projects.map((project, index) => (
          <AccordionItem key={project.id}>
            <AccordionButton>
              <AccordionIcon />
              <Box flex="1" textAlign="left" ml={5}>
                <Text fontWeight={"medium"}>
                  {project.name ? project.name : "Project Name"}
                </Text>
              </Box>
              <span onClick={() => handleDelete(index)} mr={5}>
                &#x2715;
              </span>
            </AccordionButton>

            <AccordionPanel pb={4}>
              <VStack spacing={3} alignItems={"flex-end"}>
                <Input
                  value={project.name}
                  onChange={(e) => handleChange(e, project.id)}
                  name="name"
                  id="name"
                  type="text"
                  variant="filled"
                  placeholder="Project Name"
                />

                <Input
                  value={project.url}
                  onChange={(e) => handleChange(e, project.id)}
                  name="url"
                  id="url"
                  type="url"
                  variant="filled"
                  placeholder="Project URL"
                />

                <Textarea
                  value={project.description}
                  onChange={(e) => handleChange(e, project.id)}
                  name="description"
                  id="description"
                  variant="filled"
                  placeholder="Description..."
                />
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      <Button colorScheme={"green"} my={5} onClick={addMore}>
        Add More
      </Button>
    </>
  );
};

export default Projects;
