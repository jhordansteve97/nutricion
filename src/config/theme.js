import { createTheme } from "@mui/material/styles";

export const primary = "#FFD61B";
export const secondary = "#005FC5";
export const descriptionColor = "#8E8D8D";

export const themeMain = createTheme({
  palette: {
    primary: {
      main: primary,
      contrastText: "#434142",
    },
    secondary: {
      main: secondary
    }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontSize: "16px",
        },
      },
    },
  },
});