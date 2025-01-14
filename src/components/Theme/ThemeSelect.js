import { HStack, useRadioGroup } from "@chakra-ui/react";
import React from "react";
import { useResume } from "../../contexts/ResumeContext";
import ThemeOption from "./ThemeOption";

const ThemeSelect = () => {
  const options = [
    "green.400",
    "purple.400",
    "blue.400",
    "gray.400",
    "red.400",
    "orange.400",
    "yellow.400",
    "black",
    "#F15BA6",
  ];

  const { theme, setTheme } = useResume();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "color",
    value: theme,
    onChange: setTheme,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radioProps = getRadioProps({ value });
        return (
          <ThemeOption key={value} radioProps={radioProps} bgColor={value} />
        );
      })}
    </HStack>
  );
};

export default ThemeSelect;
