import { Box, useRadio } from "@chakra-ui/react";
import React from "react";

const ThemeOption = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props.radioProps);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor={"pointer"}
        borderWidth={"1px"}
        rounded={"full"}
        boxShadow={"lg"}
        bg={props.bgColor}
        _checked={{
          borderColor: "black",
          borderWidth: "2px",
        }}
        p={5}
      ></Box>
    </Box>
  );
};

export default ThemeOption;
