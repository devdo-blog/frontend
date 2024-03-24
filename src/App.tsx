// src/App.tsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Layout/Navbar/Navbar";
import AppRoutes from "./routes";
import GlobalStyle from "./style/GlobalStyle";

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <AppRoutes />
    </Router>
  );
};

export default App;
