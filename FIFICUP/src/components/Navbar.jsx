import { Link } from "react-router-dom"

{
  /* ////////////////////////////////////////////////////////////////////////////////////////////////// */
}

const Navbar = () => {
  const token = localStorage.getItem("token")
  return (
    <nav className="navbar">
      <h2>FIFA 2026</h2>
      <div className="nav-links">
        {/* link لازم حرف كبير دائما */}

        <Link to="/">Home</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/matches">Matches</Link>
        <Link to="/stadiums">Stadiums</Link>
        <Link to="/events">Events</Link>
        {token ? (
          <button
            className="logout-btn"
            onClick={() => {
              localStorage.removeItem("token")
              window.location.reload()
            }}
          >
            Sign Out
          </button>
        ) : (
          <>
            <Link to="/signin">Sign In</Link>

            <Link to="/signup" className="signup-btn">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
