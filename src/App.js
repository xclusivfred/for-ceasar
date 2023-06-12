import './App.css';
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/not-found/Not-found";
import Home from "./components/home/Home";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
