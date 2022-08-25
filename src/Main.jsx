import { Button, Container, Heading, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { useReactToPrint } from "react-to-print";
import Builder from "./components/Builder";
import ThemeSelect from "./components/theme/ThemeSelect";
import { useResume } from "./contexts/ResumeContext";
import Template1 from "./templates/template1";
import Template2 from "./templates/template2";
import Template3 from "./templates/template3";
import Template4 from "./templates/template4";
import Template5 from "./templates/template5";

const templateMap = [
  <Template1 />,
  <Template2 />,
  <Template3 />,
  <Template4 />,
  <Template5 />,
];

const Main = () => {
  const [templateIndex, setTemplateIndex] = useState(2);
  const { printElem } = useResume();

  const handlePrint = useReactToPrint({
    content: () => printElem.current,
  });

  return (
    <Container bg={"gray.50"} minW={"full"} py={10} id="builder">
      <Heading
        as="h4"
        size="lg"
        textAlign={"center"}
        color={"gray.700"}
        style={{ fontFamily: "Poppins" }}
        fontWeight={"medium"}
      >
        Resume Builder
      </Heading>

      <Stack
        direction={{ base: "column", md: "row" }}
        gap={4}
        mx={{ base: 2, md: 12 }}
        my={8}
      >
        <Stack gap={4} mx={{ base: 2, md: 4 }}>
          <ThemeSelect />
          <Builder />
        </Stack>

        <Stack gap={4} w={"full"}>
          <Stack direction={{ base: "column", md: "row" }}>
            <Button onClick={(_e) => setTemplateIndex(0)} colorScheme={"green"}>
              Template 1
            </Button>
            <Button onClick={(_e) => setTemplateIndex(1)} colorScheme={"green"}>
              Template 2
            </Button>
            <Button onClick={(_e) => setTemplateIndex(2)} colorScheme={"green"}>
              Template 3
            </Button>
            <Button onClick={(_e) => setTemplateIndex(3)} colorScheme={"green"}>
              Template 4
            </Button>
            <Button onClick={(_e) => setTemplateIndex(4)} colorScheme={"green"}>
              Template 5
            </Button>
            <Button
              rightIcon={<MdOutlineFileDownload />}
              onClick={handlePrint}
              colorScheme={"green"}
              style={{ marginLeft: "auto" }}
            >
              Download
            </Button>
          </Stack>
          {templateMap[templateIndex]}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Main;
