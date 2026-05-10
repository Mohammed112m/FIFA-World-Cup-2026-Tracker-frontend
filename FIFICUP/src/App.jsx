import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Matches from "./pages/Matches"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ThankYou from "./pages/ThankYou"
import Teams from "./pages/Teams"
import Admin from "./pages/Admin"
import Stadiums from "./pages/Stadiums"
import Events from "./pages/Events"
import CommunityChat from "./pages/CommunityChat"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signin" element={<Signin />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/matches" element={<Matches />} />

        <Route path="/admin" element={<Admin />} />
        
        <Route path="/teams" element={<Teams />} />

        <Route path="/stadiums" element={<Stadiums />} />

        <Route path="/events" element={<Events />} />

        <Route path="/chat" element={<CommunityChat />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
