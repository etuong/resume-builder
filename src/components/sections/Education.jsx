import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useResume } from "../../contexts/ResumeContext";
import { getNewEducation } from "../../utils/Utility";

const Education = () => {
  const { educationList, setEducationList } = useResume();

  const addMore = () => {
    setEducationList((eduList) => [...eduList, getNewEducation()]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = educationList.map((education, i) =>
      index === i ? Object.assign(education, { [name]: value }) : education
    );

    setEducationList(updatedEducation);
  };

  const handleDelete = (selectedIndex) => {
    setEducationList((eduList) =>
      eduList.filter((_, index) => index !== selectedIndex)
    );
  };

  return (
    <>
      <Accordion allowToggle defaultIndex={0}>
        {educationList.map((education, index) => (
          <AccordionItem key={education.id}>
            <AccordionButton>
              <AccordionIcon />
              <Box flex="1" textAlign="left" ml={5}>
                <Text fontWeight={"medium"}>
                  {education.degree ? education.degree : "Degree"}
                </Text>
              </Box>
              <span onClick={(e) => handleDelete(index)} mr={5}>
                &#x2715;
              </span>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <VStack spacing={4}>
                <Input
                  onChange={(e) => handleChange(e, index)}
                  name="degree"
                  type="text"
                  variant="filled"
                  placeholder="Degree"
                />
                <Input
                  onChange={(e) => handleChange(e, index)}
                  name="school"
                  type="text"
                  variant="filled"
                  placeholder="School"
                />
              </VStack>

              <HStack spacing={4} mt={4}>
                <FormControl>
                  <FormLabel htmlFor="startyr">Start Year</FormLabel>
                  <Input
                    onChange={(e) => handleChange(e, index)}
                    name="startYr"
                    id="startyr"
                    type="number"
                    variant="filled"
                    min="1900"
                    max="2030"
                    placeholder="Start Year"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="endyr">End Year</FormLabel>
                  <Input
                    onChange={(e) => handleChange(e, index)}
                    name="endYr"
                    id="endyr"
                    type="number"
                    variant="filled"
                    min="1900"
                    max="2030"
                    placeholder="Start Year"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="grade">Grade</FormLabel>
                  <Input
                    onChange={(e) => handleChange(e, index)}
                    name="grade"
                    id="grade"
                    type="text"
                    variant="filled"
                    placeholder="Grade"
                  />
                </FormControl>
              </HStack>
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

export default Education;
