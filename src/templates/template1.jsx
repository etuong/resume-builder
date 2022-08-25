import React from "react";
import { useResume } from "../contexts/ResumeContext";
import "./template1.css";
import {
  Box,
  Heading,
  HStack,
  ListItem,
  Tag,
  TagLabel,
  Text,
  UnorderedList,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";
import { MdLocalPhone, MdLocationPin, MdMail } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";

export default function Template1() {
  const { theme, about, educationList, skills, workList, projects, printElem } =
    useResume();

  return (
    
    <div ref={printElem} className="rela-block page">
      <div className="rela-block top-bar">
        <div className="caps name">
          <div className="abs-center">{about.name}</div>
        </div>
      </div>
      <HStack className="side-bar" bg={theme}>
        <div className="side-bar" style={{ backgroundColor: { theme } }}>
          <div
            className="profile-picture logo-text"
            style={{
              backgroundImage: `url(${about.picture})`,
              margin: "10px auto",
            }}
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

          <p className="rela-block caps side-header">Expertise</p>
          {skills.map((skill, index) => (
            <Tag
              size={"md"}
              borderRadius="md"
              variant="solid"
              mx={1}
              bg={theme.replace("400", "500")}
              key={index}
            >
              <TagLabel>{skill.name}</TagLabel>
            </Tag>
          ))}

          <p className="rela-block caps side-header">Education</p>
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
        </div>
      </HStack>

      <div className="rela-block content-container">
        <h2 className="rela-block caps title">
          {about.role ? about.role : "Full Stack Software Engineer"}
        </h2>
        <div className="rela-block separator"></div>

        <div className="rela-block caps greyed">Experience</div>
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
              <h3> {position ? position : "Full Stack Developer"}</h3>
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

        <div className="rela-block caps greyed">Projects</div>
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
      </div>
    </div>
  );
}
