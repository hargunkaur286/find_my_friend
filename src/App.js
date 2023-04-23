import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Find from "./Pages/Find";
import Chat from "./Pages/Chatpage";
import Profile from "./Pages/Profile";
import Text from "./Pages/Text";
import Chatpage from "./Pages/Chatpage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/find" element={<Find/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/chat" element={<Chatpage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
