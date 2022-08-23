import React from "react";
import "./template3.css";

import {
  HStack,
  ListItem,
  Tag,
  TagLabel,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";
import { MdLocalPhone, MdLocationPin, MdMail } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { useResume } from "../contexts/ResumeContext";

const Template3 = () => {
  const { theme, about, educationList, skills, workList, projects, printElem } =
    useResume();

  return (
    <div className="wrapper clearfix" ref={printElem}>
      <div className="inner">
        <section>
          <h1>About</h1>
          <div
            className="profile-picture"
            style={{ backgroundImage: `url(${about.picture})` }}
          ></div>

          <HStack spacing={1}>
            <MdMail />{" "}
            <Text>{about.email ? about.email : "ethan@gmail.com"}</Text>
          </HStack>
          <HStack spacing={1}>
            <MdLocalPhone />{" "}
            <Text>{about.phone ? about.phone : "+123456789"}</Text>
          </HStack>
          <HStack spacing={1}>
            <MdLocationPin />{" "}
            <Text>{about.address ? about.address : "Seattle, WA"}</Text>
          </HStack>
          <HStack spacing={1}>
            <RiLinkedinBoxFill />{" "}
            <Text as="a" href={about.linkedin}>
              LinkedIn
            </Text>
          </HStack>
        </section>

        <section>
          <h1>Technical Skills</h1>
          <ul className="skill-set" style={{ marginTop: "10px" }}>
            {skills.map((skill, index) => (
              <Tag
                size={"md"}
                mx={1}
                my={1}
                borderRadius="md"
                variant="solid"
                bg={theme.replace("400", "500")}
                key={index}
              >
                <TagLabel>{skill.name}</TagLabel>
              </Tag>
            ))}
          </ul>
        </section>

        <section>
          <h1>Employment</h1>
          {workList.map((work, index) => {
            const {
              position,
              type,
              company,
              startDate,
              endDate,
              description: desc,
            } = work;

            return (
              <VStack
                key={index}
                spacing={0.5}
                alignItems={"flex-start"}
                lineHeight={1.3}
                pb={2}
              >
                <Text fontWeight={"medium"}>
                  {position ? position : "Full Stack Developer"}
                </Text>
                <Text fontSize={"sm"}>
                  {company ? company : "XYZ Infotech Services"} -{" "}
                  {type ? type : "Full-time"}
                </Text>
                <Text fontSize={"xs"} fontStyle={"italic"}>
                  {startDate ? startDate : "2018-03"} -{" "}
                  {endDate ? endDate : "2021-12"}
                </Text>
                <Text fontSize={"sm"} as="p">
                  {desc
                    ? desc
                    : "Fixed bugs from existing websites and implemented enhancements that significantly improved web functionality and speed."}
                </Text>
              </VStack>
            );
          })}
        </section>

        <section>
          <h1>Projects</h1>
          {projects.map((project, index) => {
            const { name, url, description: desc } = project;
            return (
              <VStack
                key={index}
                spacing={0.5}
                alignItems={"flex-start"}
                lineHeight={1.3}
                pb={2}
              >
                <HStack as="a" href={url} target="_blank" spacing={0.5}>
                  <Text fontWeight={"medium"} flex={"row"}>
                    {name ? name : "Project Name"}{" "}
                  </Text>{" "}
                  <BiLinkExternal />
                </HStack>
                <UnorderedList pl={5}>
                  <ListItem>
                    <Text fontSize={"sm"} as="p">
                      {desc
                        ? desc
                        : "Lorem ipsum dolor sit amet consectetur adipisicing."}
                    </Text>
                  </ListItem>
                </UnorderedList>
              </VStack>
            );
          })}
        </section>

        <section>
          <h1>Education</h1>
          {educationList.map((education, index) => {
            const { degree, school, startYr, endYr, grade } = education;

            return (
              <VStack
                key={index}
                spacing={0}
                alignItems={"flex-start"}
                w={"full"}
                pb={2}
              >
                <Text fontWeight={"medium"}>
                  {degree ? degree : "B.Tech Computer Engineering"}
                </Text>
                <Text fontSize={"sm"}>
                  {school ? school : "College of Engineering Pune"}
                </Text>
                <HStack
                  fontSize={"xs"}
                  fontStyle={"italic"}
                  justifyContent={"space-between"}
                  w={"full"}
                >
                  <Text>
                    {startYr ? startYr : 2014} - {endYr ? endYr : 2018}
                  </Text>
                  <Text>{grade ? grade : "8.7 CGPA"}</Text>
                </HStack>
              </VStack>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Template3;
