import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Find from "./Pages/Find";
import Chat from "./Pages/Chatpage";
import Profile from "./Pages/Profile";
import Text from "./Pages/Text";

function App() {
  return (
    <>
    <BrowserRouter>
   
    <Routes>
    <Route path="/home" element={<Home/>} />
      <Route path="/find" element={<Find/>} />
      <Route path="/chat" element={<Chat/>} />
      <Route path="/profile" element={<Profile/>} />
      {/* <Route path="/text" element={<Text/>} /> */}
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
