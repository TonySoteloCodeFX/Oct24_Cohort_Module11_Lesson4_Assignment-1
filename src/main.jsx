import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./component/HomePage";
import CharacterDetails from "./component/CharacterDetails";
import CharacterList from "./component/CharacterList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<App />} />
        <Route path="/pokemon/:id" element={<CharacterDetails />} />
      </Routes>
    </Router>
  </StrictMode>
);
