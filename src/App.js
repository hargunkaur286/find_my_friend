import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Find from "./Pages/Find";
import Chat from "./Pages/Chatpage";
<<<<<<< HEAD
import Profile from "./Pages/Profile";
import Text from "./Pages/Text";
=======
import Chatpage from "./Pages/Chatpage";

>>>>>>> 324a501bf421e2e4522285a236ef082cd1a977cf

function App() {
  return (
    <>
    <BrowserRouter>
   
    <Routes>
    <Route path="/home" element={<Home/>} />
    <Route path="/" element={<Home/>} />
      <Route path="/find" element={<Find/>} />
<<<<<<< HEAD
      <Route path="/chat" element={<Chat/>} />
      <Route path="/profile" element={<Profile/>} />
      {/* <Route path="/text" element={<Text/>} /> */}
=======
      <Route path="/chat" element={<Chatpage/>} />
      
>>>>>>> 324a501bf421e2e4522285a236ef082cd1a977cf
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
