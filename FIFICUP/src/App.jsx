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
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  )
  useEffect(() => {
    localStorage.setItem("language", language)
    document.body.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

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
      <Navbar
        user={user}
        signOut={signOut}
        language={language}
        setLanguage={setLanguage}
      />

      <Routes>
        <Route path="/" element={<Home language={language} />} />

        <Route
          path="/signin"
          element={<Signin setUser={setUser} language={language} />}
        />

        <Route path="/signup" element={<Signup language={language} />} />

        <Route
          path="/matches"
          element={
            <ProtectedRoute>
              <Matches language={language} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/teams"
          element={
            <ProtectedRoute>
              <Teams language={language} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/stadiums"
          element={
            <ProtectedRoute>
              <Stadiums language={language} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <Events language={language} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <CommunityChat language={language} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/rules"
          element={
            <ProtectedRoute>
              <Rules language={language} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin language={language} />
            </AdminRoute>
          }
        />
      </Routes>

      <Footer language={language} />
    </BrowserRouter>
  )
}

export default App
