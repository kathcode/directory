import { AppBar, Toolbar, Typography } from "@mui/material";

export const Header = () => (
  <AppBar position="static" sx={{ mb: 5 }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Milton Latinas community
      </Typography>
    </Toolbar>
  </AppBar>
);
