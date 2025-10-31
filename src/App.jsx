import "./App.css";
import Home from "./pages/Home/Home"; 
import Test from "./pages/Test/Test";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './pages/Auth/Auth';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;