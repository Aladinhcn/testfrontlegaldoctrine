import { useRoutes } from "react-router-dom";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";

import { theme } from "./theme";
import  routes  from "./routes";

function App() {
  const content = useRoutes(routes);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{content}</ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
