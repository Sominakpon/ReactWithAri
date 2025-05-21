// import { , Route, Routes } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router";
import AppLayouts from "./layouts/AppLayouts";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayouts/>}>
            <Route index element={<Home/>} />
            <Route path="/Blog" element={<Blog/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
