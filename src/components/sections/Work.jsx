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
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useResume } from "../../contexts/ResumeContext";
import { getNewWork } from "../../utils/Utility";

const Work = () => {
  const { workList, setWorkList } = useResume();

  const addMore = () => {
    setWorkList((workList) => [...workList, getNewWork()]);
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    const updatedWorkList = workList.map((work) =>
      work.id === id
        ? Object.assign(work, { id: uuidv4(), [name]: value })
        : work
    );

    setWorkList(updatedWorkList);
  };

  const handleDelete = (selectedIndex) => {
    setWorkList((workList) =>
      workList.filter((_, index) => index !== selectedIndex)
    );
  };

  return (
    <>
      <Accordion allowToggle defaultIndex={[0]}>
        {workList.map((work, index) => (
          <AccordionItem key={work.id}>
            <AccordionButton>
              <AccordionIcon />
              <Box flex="1" textAlign="left" ml={5}>
                <Text fontWeight={"medium"}>
                  {work.position ? work.position : "Position"}
                </Text>
              </Box>
              <span onClick={() => handleDelete(index)} mr={5}>
                &#x2715;
              </span>
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Input
                value={work.position}
                onChange={(e) => handleChange(e, work.id)}
                name="position"
                type="text"
                variant="filled"
                placeholder="Position"
                mb={3}
              />

              <HStack spacing={3}>
                <Input
                  value={work.company}
                  onChange={(e) => handleChange(e, work.id)}
                  name="company"
                  type="text"
                  variant="filled"
                  placeholder="Company"
                />
                <Select
                  value={work.type}
                  onChange={(e) => handleChange(e, work.id)}
                  name="type"
                  variant="filled"
                  placeholder="Employment Type"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Internship">Internship</option>
                  <option value="Freelance">Freelance</option>
                </Select>
              </HStack>

              <HStack spacing={3} mt={4}>
                <FormControl>
                  <FormLabel htmlFor="startDate">Start Date</FormLabel>
                  <Input
                    value={work.startDate}
                    onChange={(e) => handleChange(e, work.id)}
                    name="startDate"
                    id="startDate"
                    type="month"
                    variant="filled"
                    placeholder="Start Date"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="endDate">End Date</FormLabel>
                  <Input
                    value={work.endDate}
                    onChange={(e) => handleChange(e, work.id)}
                    name="endDate"
                    id="endDate"
                    type="month"
                    variant="filled"
                    placeholder="Start Date"
                  />
                </FormControl>
              </HStack>

              <FormControl mt={3}>
                <FormLabel htmlFor="description">Description</FormLabel>
                <Textarea
                  value={work.description}
                  onChange={(e) => handleChange(e, work.id)}
                  name="description"
                  id="description"
                  variant="filled"
                  placeholder="Description..."
                />
              </FormControl>
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

export default Work;
