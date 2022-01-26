import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Company from "./components/Company";

function App() {
  return (
    <BrowserRouter>
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:company" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
