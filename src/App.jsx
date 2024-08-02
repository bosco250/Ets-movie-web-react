import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import "./App.css";
import Films from "./components/Films/Films.jsx";
import SingleMovie from "./SingleMovie.jsx";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
       <Header />
       <Outlet/>
      {/*<Home  />
      <Films /> */}
    </>
  );
}
export default App;
