import Navbar from "../components/Navbar";
import GroupTabs from "../components/GroupTabs";
import { Container, Typography } from "@mui/material";

import { theme } from "../utils/theme";
import { ThemeProvider } from "@mui/material/styles";

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Container>
          <Typography variant="h4" mt={1} sx={{ fontWeight: "bold" }}>
            Tabla de posiciones
          </Typography>
          <GroupTabs />
        </Container>
      </div>
    </ThemeProvider>
  );
}