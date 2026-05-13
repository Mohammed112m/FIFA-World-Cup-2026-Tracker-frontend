import { Link, useNavigate } from "react-router-dom"



///////////////////////////////////////////////////

const Navbar = ({ user, signOut }) => {
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut()
    navigate("/signin")
  }

/////////////////////////////////////////////

  return (

    <nav className="navbar">
      <h2>FIFA 2026</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        {user && (
          <>

            <Link to="/teams">Teams</Link>
            <Link to="/matches">Matches</Link>
            <Link to="/stadiums">Stadiums</Link>
            <Link to="/events">Events</Link>
            <Link to="/chat">Chat</Link>
            <Link to="/rules">Rules</Link>

            {user.isAdmin && <Link to="/admin">Admin</Link>}

            <button className="logout-btn" onClick={handleSignOut}>
              Sign Out
            </button>
          </>
        )}

        {!user && (
          <>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Get Started</Link>
          </>
        )}
      </div>
    </nav>
  )
}


export default Navbar
