import "./App.css";
import { MenuIcons } from "./common/menuIcons/menuIcons";
import Footer from "./features/footer/Footer";
import { Directory } from "./features/directory/Directory";
import { useState } from "react";
import { Restaurant } from "./features/restaurants/Restaurants";
import { Events } from "./features/events/Events";
import { Header } from "./features/header/Header";

function App() {
  const [active, setActive] = useState(0);
  return (
    <>
      <Header />

      <MenuIcons setActive={setActive} active={active} />

      {active === 0 && <Directory />}
      {active === 1 && <Restaurant />}

      {active === 2 && <Events />}

      <Footer />
    </>
  );
}

export default App;
