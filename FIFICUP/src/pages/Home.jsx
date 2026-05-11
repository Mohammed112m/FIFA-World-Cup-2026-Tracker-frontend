import { Link } from "react-router-dom"
import logoImage from "../assets/logoImage.png"

{
  /* ////////////////////////////////////////////////////////////////////////////////////////////////// */
}

const Home = () => {
  return (
    <main className="home-page">
      {/*

backgroundImage خلفية لمربع hero
linear-gradient(
  rgba(0,0,0,0.6),
  rgba(0,0,0,0.6)
) 0.6 يعني شفافة
هذي تخلي الصروة شفافة عشان يبين الكتابة فوق الصورة
url(${logoImage})
هذي حق الصورة
 */}

      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(
      rgba(0,0,0,0.6),
      rgba(0,0,0,0.6)
    ), url(${logoImage})`,
        }}
      >
        <div className="hero-content">
          <p className="hero-p"> FIFA World Cup 2026 </p>

          <h1> Explore the Biggest Football Tournament</h1>

          <p className="hero-text">
            Discover matches, teams, stadiums, events, and join the community
            chat during the FIFA World Cup 2026.
          </p>

          <div className="hero-buttons">
            <Link to="/matches" className="btn first">
              {" "}
              View Matches{" "}
            </Link>

            <Link to="/signup" className="btn second">
              {" "}
              Get Started{" "}
            </Link>
          </div>
        </div>
      </section>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <section className="info-section">
        <h2> About the Tournament</h2>

        <div className="info-gird">
          <div className="info-card">
            <h3> Host Nations</h3>
            <p>
              Canada , Mexico , and united States Will host the 2026 Tournament
            </p>
          </div>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="info-card">
            <h3> Key Dates </h3>
            <p> Opening match: June 11, 2026</p>
            <p> Final match: July 19, 2026</p>
          </div>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="info-card">
            <h3> Community</h3>
            <p> Chat with other football fans and share your thoughts.</p>
          </div>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <section className="matches-section">
            <h2> Featured Matches </h2>

            <div className="matches-gird">
              <div className="match-card">
                <h3>⚽Argentina VS Brazil </h3>
                <p> 📅 June 15, 2026 </p>
                <p> 📍 metlife Stadium </p>
                <a
                  href="https://maps.app.goo.gl/9ok7Lbzkogm88Tr29"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  View Location{" "}
                </a>
                <button> View Details </button>
              </div>
              {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

              <div className=" match-card">
                <h3>⚽ France VS England </h3>
                <p> 📅 June 18, 2026 </p>
                <p> 📍 Sofi Stadium </p>
                <a
                  href="https://maps.app.goo.gl/Lk99dy57WD2fvqyo7"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  View Location{" "}
                </a>
                <button> View Details </button>
              </div>

              <div className="match-card">
                <h3>⚽ Spain VS Germany </h3>
                <p> 📅 June 20, 2026 </p>
                <p> 📍 AT&T Stadium </p>
                <a
                  href="https://maps.app.goo.gl/ixroYxuUN4f87hb86"
                  target="_blank" // this is very helpful we doit for when user click the view location he open new page not same page
                  rel="noreferrer" // this is for security   ist very important when we use target .. this
                >
                  {" "}
                  View Location{" "}
                </a>
                <button> View Details </button>
              </div>
            </div>
          </section>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <section className="explore-section">
            <h2> Explore World Cup 2026 </h2>

            <div className="explore-grid">
              <Link to="/Matches" className="explore-card">
                <h3>⚽ Matches</h3>
                <p> View upcoming matches and match details.</p>
              </Link>

              <Link to="/Stadiums" className="explore-card">
                <h3> 🏟️ Stadiums </h3>
                <p> Discover stadiums, cities, and capacities. </p>
              </Link>

              <Link to="/teams" className="explore-card">
                <h3> Teams </h3>
                <p> Explore teams, Flags, Coaches, and Groups.</p>
              </Link>

              <Link to='/events' className="explore-card">
              <h3>🎉 Events </h3>
              <p> Find match and city events during the tournament</p>
              </Link>


              <Link to='/rules' className="explore-card">
              <h3> ⚽Rules </h3>
              <p>Find new Rules For FIFA 2026 </p>
              </Link>
            </div>
          </section>

 {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}


 {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

        </div>
      </section>
    </main>
  )
}

export default Home
