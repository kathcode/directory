import { Box, Stack } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import { Icon } from "./Icon";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import WorkIcon from "@mui/icons-material/Work";

export const MenuIcons = ({
  setActive,
  active,
}: {
  setActive: (activeIndex: number) => void;
  active: number;
}) => {
  return (
    <Box display="flex" alignItems="center" sx={{ ml: { xs: 2, md: 4 } }}>
      <Box
        sx={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          pb: 2,
        }}
      >
        <Stack direction="row" spacing={3}>
          <Icon
            active={active === 0}
            title="Directory"
            icon={<CallIcon fontSize="large" />}
            onClick={() => setActive(0)}
          />
          <Icon
            active={active === 1}
            title="Restaurants"
            onClick={() => setActive(1)}
            icon={<RestaurantIcon fontSize="large" />}
          />
          <Icon
            active={active === 2}
            title="Events"
            onClick={() => setActive(2)}
            icon={<Diversity3Icon fontSize="large" />}
          />

          <Icon
            active={active === 3}
            title="Job offers"
            onClick={() => setActive(3)}
            icon={<WorkIcon fontSize="large" />}
          />
        </Stack>
      </Box>
    </Box>
  );
};
