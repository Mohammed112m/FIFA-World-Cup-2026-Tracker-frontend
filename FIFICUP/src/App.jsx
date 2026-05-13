import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { useEffect, useState } from "react"

import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Matches from "./pages/Matches"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Teams from "./pages/Teams"
import Admin from "./pages/Admin"
import Stadiums from "./pages/Stadiums"
import Events from "./pages/Events"
import CommunityChat from "./pages/CommunityChat"
import Rules from "./pages/Rules"

///////////////////////////////////////
const App = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  )
  ///////////////////////////////////////
  const signOut = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUser(null)
  }
///////////////////////////////////////
  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token")

    if (!token) {
      return <Navigate to="/signin" />
    }
    return children
  }
///////////////////////////////////////
  const AdminRoute = ({ children }) => {
    const token = localStorage.getItem("token")

    if (!token) {
      return <Navigate to="/signin" />
    }
    if (!user?.isAdmin) {
      return <Navigate to="/" />
    }
    return children
  }
///////////////////////////////////////
  return (
    <BrowserRouter>
      <Navbar user={user} signOut={signOut} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signin" element={<Signin setUser={setUser} />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/matches"
          element={
            <ProtectedRoute>
              <Matches />
            </ProtectedRoute>
          }
        />

        <Route
          path="/teams"
          element={
            <ProtectedRoute>
              <Teams />
            </ProtectedRoute>
          }
        />

        <Route
          path="/stadiums"
          element={
            <ProtectedRoute>
              <Stadiums />
            </ProtectedRoute>
          }
        />

        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <Events />
            </ProtectedRoute>
          }
        />

        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <CommunityChat />
            </ProtectedRoute>
          }
        />

        <Route
          path="/rules"
          element={
            <ProtectedRoute>
              <Rules />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
