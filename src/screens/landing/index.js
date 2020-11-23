import "./style.css";
import { Home } from "./Header/Home";
import { Features } from "./Features";
import { Description } from "./Description";
import { Stats } from "./Stats";
import { Footer } from "../../components/Footer";

export const LandingPage = () => {
  return (
    <div className="landing__container">
      <Home />
      <Features />
      <Stats />
      <Description />
      <Footer />
    </div>
  );
};
