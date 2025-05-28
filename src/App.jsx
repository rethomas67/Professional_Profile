/* google font for the project title*/
import "@fontsource/tangerine";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

/*display the navbar and use outlet as a placeholder child routes*/
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
