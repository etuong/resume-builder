import { Button, Container, Heading, Stack } from "@chakra-ui/react";
import { MdOutlineFileDownload } from "react-icons/md";
import { useReactToPrint } from "react-to-print";
import { useResume } from "./contexts/ResumeContext";
import Builder from "./components/Builder";
import ResumePreview from "./components/ResumePreview";
import ThemeSelect from "./components/theme/ThemeSelect";

const Main = () => {
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

      <div style={{ display: "flex", padding: "0px 50px" }}>
        <ThemeSelect />
        <Button
          rightIcon={<MdOutlineFileDownload />}
          onClick={handlePrint}
          colorScheme={"green"}
          style={{ marginLeft: "auto" }}
        >
          Download
        </Button>
      </div>
      <Stack
        direction={{ base: "column", md: "row" }}
        // mt={16}
        gap={4}
        mx={{ base: 2, md: 12 }}
        my={8}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
        <Builder />
        <ResumePreview />
      </Stack>
    </Container>
  );
};

export default Main;
