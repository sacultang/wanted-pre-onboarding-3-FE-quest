import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import OutletLayout from "./components/OutletLayout";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<OutletLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
