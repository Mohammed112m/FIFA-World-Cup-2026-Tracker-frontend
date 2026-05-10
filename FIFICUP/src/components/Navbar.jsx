import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <h2>FIFA World Cup 2026</h2>
{/* link لازم حرف كبير دائما */}
      <div>
        <Link to="/">Home</Link>
        <Link to="/matches">Matches</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  )
}

export default Navbar
