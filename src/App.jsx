import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Docs from "./pages/docs/Docs";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
    </Routes>
    </BrowserRouter>
  );
}