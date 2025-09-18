import Home from "../../pages/Home";
import { ThemeProvider } from "../ThemeProvider";

export default function HomeExample() {
  return (
    <ThemeProvider>
      <div className="h-screen">
        <Home />
      </div>
    </ThemeProvider>
  );
}