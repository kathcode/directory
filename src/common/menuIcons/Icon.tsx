import { Box, Button, Card, Paper, Typography } from "@mui/material";
import type { ReactElement } from "react";

export const Icon = ({
  icon,
  title,
  active = false,
  onClick,
}: {
  icon: ReactElement;
  title: string;
  active?: boolean;
  onClick: () => void;
}) => (
  <Box>
    <Paper
      variant="outlined"
      sx={{
        padding: "20px",
        borderColor: `${active ? "#1976DC" : "#b6b4b4"}`,
        color: `${active ? "#1976DC" : "#b6b4b4"}`,
        margin: "4px",
        cursor: "pointer",
        textAlign: "center",
        minWidth: "100px",
      }}
      onClick={onClick}
    >
      <Box component="section">{icon}</Box>
      <Box component="section">
        <Typography>{title}</Typography>
      </Box>
    </Paper>
  </Box>
);
