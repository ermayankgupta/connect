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
        <header className=" bg-slate-400">
          <div className="container mx-auto">
            <div className="flex justify-between h-24 items-center">
              <h1>Logo</h1>
              <div className="flex">
                <Link to="/login" className="mr-10">login</Link>
                <Link to="/signup">SignUp</Link>
              </div>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
