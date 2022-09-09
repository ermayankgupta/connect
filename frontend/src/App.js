import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Chat from "./pages/Chat";
import Homepage from "./pages/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
