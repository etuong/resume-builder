import React from "react";
import "./template5.css";

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
import { useResume } from "../contexts/ResumeContext";
import { Divider } from '@chakra-ui/react'

const Template5 = () => {
  const { theme, about, educationList, skills, workList, projects, printElem } =
    useResume();

  return (
    <div className="container" ref={printElem}>
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="title template5">
            <div
              className="profile-picture"
              style={{
                backgroundImage: `url(${about.picture})`,
                margin: "10px auto",
              }}
            ></div>

            <h1> {about.name ? about.name : "Ethan Uong"}</h1>
            <h3>{about.role ? about.role : "Full Stack Software Engineer"}</h3>
            <HStack
              p={4}
              justifyContent={"space-around"}
              style={{ margin: "auto" }}
            >
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
            </HStack>
            <Divider orientation='horizontal' borderColor={theme}/>
          </div>

          <div className="summary">
            <Heading color={theme} as="h4" size="md">
              Education
            </Heading>

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

          <div className="summary">
            <Heading color={theme} as="h4" size="md">
              Work Experience
            </Heading>

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
          </div>

          <div className="summary">
            <Heading color={theme} as="h4" size="md">
              Projects
            </Heading>

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

          <div className="summary">
            <Heading color={theme} as="h4" size="md">
              Skills
            </Heading>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template5;
