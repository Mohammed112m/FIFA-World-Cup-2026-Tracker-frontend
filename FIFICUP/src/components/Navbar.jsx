import { Link, useNavigate } from "react-router-dom"
import languageData from "../language"

///////////////////////////////////////////////////

const Navbar = ({ user, signOut, language, setLanguage }) => {
  const navigate = useNavigate()
  const t = languageData[language]

  /////////////////////////////////////////////
  const handleSignOut = () => {
    signOut()
    navigate("/signin")
  }

  /////////////////////////////////////////////

  return (
    <nav className="navbar">
      <h2>FIFA 2026</h2>

      <div className="nav-links">
        <Link to="/">{t.home}</Link>

        {user && (
          <>
            <Link to="/teams">{t.teams}</Link>
            <Link to="/matches">{t.matches}</Link>
            <Link to="/stadiums">{t.stadiums}</Link>
            <Link to="/events">{t.events}</Link>
            <Link to="/chat">{t.chat}</Link>
            <Link to="/rules">{t.rules}</Link>

            {user.isAdmin && <Link to="/admin">{t.admin}</Link>}

            <button className="logout-btn" onClick={handleSignOut}>
              {t.signOut}
            </button>
          </>
        )}

        {!user && (
          <>
            <Link to="/signin">{t.signIn}</Link>
            <Link to="/signup">{t.signUp}</Link>
          </>
        )}

        <button
          className="lang-btn"
          onClick={() => setLanguage(language === "en" ? "ar" : "en")}
        >
          {language === "en" ? t.arabic : t.english}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
