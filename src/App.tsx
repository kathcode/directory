import "./App.css";
import { Typography } from "@mui/material";

import { MenuIcons } from "./common/menuIcons/menuIcons";
import Footer from "./features/footer/Footer";
import { Directory } from "./features/directory/Directory";
import { useState } from "react";
import { Restaurant } from "./features/restaurants/Restaurants";
import { Events } from "./features/events/Events";

function App() {
  const [active, setActive] = useState(0);
  return (
    <>
      <Typography variant="h2" sx={{ m: 4 }}>
        Milton Latinas community
      </Typography>

      <MenuIcons setActive={setActive} active={active} />

      {active === 0 && <Directory />}
      {active === 1 && <Restaurant />}

      {active === 2 && <Events />}

      <Footer />
    </>
  );
}

export default App;
