import "./index.css";
import Main from "./Main";
import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ResumeProvider } from "./contexts/ResumeContext";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ResumeProvider>
        <Main />
      </ResumeProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
