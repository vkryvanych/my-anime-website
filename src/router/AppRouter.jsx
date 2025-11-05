import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Test from "../pages/Test/Test";
import Auth from "../pages/Auth/Auth";
import Contact from "../pages/Contact/Contact";
import Layout from "./Layout";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="auth/*" element={<Auth />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
