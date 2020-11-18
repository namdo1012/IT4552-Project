import "./style.css";
import { Home } from "./Header/Home";
import { Features } from "./Features";

export const LandingPage = () => {
  return (
    <div className="landing__container">
      <Home />
      <Features />
    </div>
  );
};
