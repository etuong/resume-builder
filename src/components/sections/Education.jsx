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
import React, { useState } from "react";
import { useResume } from "../../contexts/ResumeContext";
import { generateKey } from "../../utils/Utility";

const Education = () => {
  const { educationList, setEducationList } = useResume();
  const [currentAccordionIndex, setCurrentAccordionIndex] = useState(0);

  const addMore = () => {
    setEducationList([...educationList, educationList]);
    setCurrentAccordionIndex(educationList.length);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = educationList.map((education, i) =>
      index === i ? Object.assign(education, { [name]: value }) : education
    );

    setEducationList(updatedEducation);
  };

  const handleDelete = () => {
    setEducationList((eduList) =>
      eduList.filter((_, index) => index !== currentAccordionIndex)
    );
  };

  return (
    <>
      <Accordion
        allowToggle
        index={currentAccordionIndex}
        onChange={(index) => setCurrentAccordionIndex(index)}
      >
        {educationList.map((education, index) => (
          <AccordionItem key={generateKey()}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontWeight={"medium"}>
                    {education.degree ? education.degree : "Degree"}
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
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

      {currentAccordionIndex !== -1 && (
        <Button colorScheme={"green"} my={5} ml={5} onClick={handleDelete}>
          Delete
        </Button>
      )}
    </>
  );
};

export default Education;
