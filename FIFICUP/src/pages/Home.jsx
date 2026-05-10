import { Link } from "react-router-dom"
const Home = () => {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-p"> FIFA World Cup 2026 </p>
          <h1> Explore the Biggest Football Tournament</h1>
          <p className="hero-text">
            {" "}
            Discover matches, teams, stadiums, events, and join the community
            chat during the FIFA World Cup 2026.
          </p>
          <div className="hero-buttons">
            <Link to="/matches" className="btn first">
              {" "}
              View Matches
            </Link>
            <Link to="/signup" className="btn second">
              {" "}
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section className="info-section">
        <h2> About the Tournament</h2>
        <div className="info-gird">
          <div className="info-card">
            <h3> Host Nations</h3>
            <p>
              {" "}
              Canada , Mexico , and united States Will host the 2026 Tournament
            </p>
          </div>
          <div className="info-card">
            <h3> Key Dates </h3>
            <p> Opening match: June 11, 2026</p>
            <p> Final match: July 19, 2026</p>
          </div>
          <div className="info-card">
            <h3> Community</h3>
            <p> Chat with other football fans and share your thoughts.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
