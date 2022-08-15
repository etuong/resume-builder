import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import About from "./sections/About";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Work from "./sections/Work";

const Builder = () => {
  return (
    <Box
      bg={"white"}
      w={"full"}
      maxW={"xl"}
      rounded={"md"}
      shadow={"md"}
      overflow={"hidden"}
    >
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>
            <Text fontWeight={"medium"}>About</Text>
          </Tab>
          <Tab>
            <Text fontWeight={"medium"}>Education</Text>
          </Tab>
          <Tab>
            <Text fontWeight={"medium"}>Skills</Text>
          </Tab>
          <Tab>
            <Text fontWeight={"medium"}>Work</Text>
          </Tab>
          <Tab>
            <Text fontWeight={"medium"}>Projects</Text>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <About />
          </TabPanel>
          <TabPanel>
            <Education />
          </TabPanel>
          <TabPanel>
            <Skills />
          </TabPanel>
          <TabPanel>
            <Work />
          </TabPanel>
          <TabPanel>
            <Projects />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Builder;
