import Header from "./components/Header.jsx";

import Mains from "./components/Mains.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Header />
        <Mains />
      </div>
    </>
  );
}

export default App;
