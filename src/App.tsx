import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { RouterItem } from "./routes/constans";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import OutletLayout from "./components/OutletLayout";
import { RouterProvider } from "react-router-dom";
import AuthenticationRoute from "./routes/AuthenticationRoute";
const App = () => {
  return (
    <RouterProvider router={AuthenticationRoute} />
    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<OutletLayout />}>
    //       <Route path="/" element={<PageOne />} />
    //       <Route path="/page2" element={<PageTwo />} />
    //       <Route path="/page3" element={<PageThree />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
