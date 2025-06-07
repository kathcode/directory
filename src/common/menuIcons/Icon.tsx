import { Box, Button, Typography } from "@mui/material";
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
    <Button
      sx={{
        padding: "20px",
        background: `${active ? "#1976DC" : "#e1e0e0"}`,
        color: `${active ? "#e1e0e0" : "#1976DC"}`,
        margin: "4px",
      }}
      onClick={onClick}
    >
      {icon}
      <Typography sx={{ ml: 2 }}>{title}</Typography>
    </Button>
  </Box>
);
