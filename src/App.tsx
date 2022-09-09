import { useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { renderCanvas } from "./components/Canvas";
import { Background } from "./components/Layout/style";
import { useAppSelector } from "./hooks/redux-hooks";
import { Pages } from "./routes";

function App() {
  const { theme } = useAppSelector((s) => s.theme);
  const matches = useMediaQuery("(min-width:992px)");
  useEffect(() => {
    const color = !theme ? "#fff" : "#000";
    const bgColor = !theme ? "rgba(0,0,0, 0.25)" : "#fffff040";
    renderCanvas(color, bgColor, !matches);
  }, [theme]);
  return (
    <>
      <Background color={!theme ? "#fff" : "#000"}>
        <div id="stars"></div>
        <div id="stars1"></div>
        <div id="stars2"></div>
      </Background>
      <Pages />
    </>
  );
}

export default App;
