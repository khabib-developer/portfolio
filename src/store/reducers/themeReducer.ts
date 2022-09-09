import { createSlice } from "@reduxjs/toolkit";
import { themeColor } from "../../constants";

interface ITheme {
  theme: number;
}

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: Number(localStorage.getItem(themeColor)),
  },
  reducers: {
    setTheme(state: ITheme) {
      const theme = Number(localStorage.getItem(themeColor));
      const nextTheme = theme ? 0 : 1;
      state.theme = nextTheme;
      localStorage.setItem(themeColor, String(nextTheme));
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
