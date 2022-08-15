import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { ResumeProvider } from "./Context";

import Main from "./Main";

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
