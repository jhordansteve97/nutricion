import { createTheme } from "@mui/material/styles";

// configuraciones de los estilos en Material UI
export const themeMain = createTheme({
  palette: {
    primary: {
      main: "#FFD61B",
      contrastText: "#434142",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontSize: "16px",   // cambia el tamaño del texto
        },
      },
    },
  },
});