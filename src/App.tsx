import viteLogo from "/vite.svg";
import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import { AuthContext } from "./contexts/AuthContext";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const { valueTest } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <h1>Vite + React{valueTest}</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
