import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Find from "./Pages/Find";
import Chat from "./Pages/Chatpage";
import Chatpage from "./Pages/Chatpage";


function App() {
  return (
    <>
    <BrowserRouter>
   
    <Routes>
    <Route path="/home" element={<Home/>} />
    <Route path="/" element={<Home/>} />
      <Route path="/find" element={<Find/>} />
      <Route path="/chat" element={<Chatpage/>} />
      
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
