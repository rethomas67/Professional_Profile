/* google font for the project title*/
import "@fontsource/tangerine";
import "@fontsource/big-shoulders-text";
import "@fontsource/big-shoulders-text/600.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

/*display the navbar and use outlet as a placeholder child routes*/
function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
      <Footer />
    </ApolloProvider>
  );
}

export default App;
