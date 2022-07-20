import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import theme from "./theme/theme";
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Typography variant="h1">hi there</Typography>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
