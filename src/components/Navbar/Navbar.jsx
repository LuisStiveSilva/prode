import React from "react";
import { Box, Container, Stack } from "@mui/material";
import styled from "styled-components";
import { theme } from "../../utils/theme";
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  margin: 0;
`;

export default function Navbar() {
  return (
    <Box py={2} sx={{ background: theme.palette.primary.main }}>
      <Container>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Title>NRG - Prode</Title>
          <Title>Nombre</Title>
        </Stack>
      </Container>
    </Box>
  );
}
