import { Box } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import { Icon } from "./Icon";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export const MenuIcons = () => {
  return (
    <Box display="flex" alignItems="center" sx={{ ml: 4 }}>
      <Icon active title="Directory" icon={<CallIcon fontSize="large" />} />
      <Icon title="Restaurants" icon={<RestaurantIcon fontSize="large" />} />
    </Box>
  );
};
