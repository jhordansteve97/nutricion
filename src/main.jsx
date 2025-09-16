import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router/dom";
import { router } from './routers/routers.jsx';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { themeMain } from './config/theme.js';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={themeMain }>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
