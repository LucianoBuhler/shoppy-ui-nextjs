"use client";

import { createTheme } from "@mui/material";

const darkTheme = createTheme({ 
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

export default darkTheme;