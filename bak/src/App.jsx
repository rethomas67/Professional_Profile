/* google font for the project title*/
//import "@fontsource/tangerine";
import { Outlet } from "react-router-dom";

/*display the navbar and use outlet as a placeholder child routes*/
function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
