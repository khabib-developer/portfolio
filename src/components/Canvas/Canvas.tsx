import { useEffect } from "react";
import { renderCanvas } from ".";
import { useAppSelector } from "../../hooks/redux-hooks";

export const Canvas = () => {
  const { theme } = useAppSelector((s) => s.theme);
  useEffect(() => {
    const color = theme ? "#fff" : "#000";
    const bgColor = theme ? "rgba(0,0,0,0.05)" : "#ffffff0d";
    // renderCanvas(color, bgColor);
  }, [theme]);
  return <canvas></canvas>;
};
