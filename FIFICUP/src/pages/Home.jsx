import { Link } from "react-router-dom"
import logoImage from "../assets/logoImage.png"


///////////////////////////////////////

const Home = () => {
  const groupsData = [
    {
      group: "A",
      message:
        "Discover Group A and follow every country in this exciting opening group.",
      teams: [
        {
          name: "Mexico",
          flag: "https://flagcdn.com/w40/mx.png",
        },
        {
          name: "South Africa",
          flag: "https://flagcdn.com/w40/za.png",
        },
        {
          name: "South Korea",
          flag: "https://flagcdn.com/w40/kr.png",
        },
        {
          name: "Czech Republic",
          flag: "https://flagcdn.com/w40/cz.png",
        },
      ],
    },
///////////////////////////////////////
    {
      group: "B",
      message:
        "Explore Group B and meet the nations ready to compete on the world stage.",
      teams: [
        {
          name: "Canada",
          flag: "https://flagcdn.com/w40/ca.png",
        },
        {
          name: "Bosnia and Herzegovina",
          flag: "https://flagcdn.com/w40/ba.png",
        },
        {
          name: "Qatar",
          flag: "https://flagcdn.com/w40/qa.png",
        },
        {
          name: "Switzerland",
          flag: "https://flagcdn.com/w40/ch.png",
        },
      ],
    },
///////////////////////////////////////
    {
      group: "C",
      message:
        "Discover Group C, where strong football nations battle for qualification.",
      teams: [
        {
          name: "Brazil",
          flag: "https://flagcdn.com/w40/br.png",
        },
        {
          name: "Morocco",
          flag: "https://flagcdn.com/w40/ma.png",
        },
        {
          name: "Haiti",
          flag: "https://flagcdn.com/w40/ht.png",
        },
        {
          name: "Scotland",
          flag: "https://flagcdn.com/w40/gb-sct.png",
        },
      ],
    },
///////////////////////////////////////
    {
      group: "D",
      message:
        "Follow Group D and explore the countries competing for World Cup glory.",
      teams: [
        {
          name: "United States",
          flag: "https://flagcdn.com/w40/us.png",
        },
        {
          name: "Paraguay",
          flag: "https://flagcdn.com/w40/py.png",
        },
        {
          name: "Australia",
          flag: "https://flagcdn.com/w40/au.png",
        },
        {
          name: "Turkey",
          flag: "https://flagcdn.com/w40/tr.png",
        },
      ],
    },
///////////////////////////////////////
    {
      group: "E",
      message:
        "Meet Group E, a group full of passion, history, and exciting football.",
      teams: [
        {
          name: "Germany",
          flag: "https://flagcdn.com/w40/de.png",
        },
        {
          name: "Curaçao",
          flag: "https://flagcdn.com/w40/cw.png",
        },
        {
          name: "Ivory Coast",
          flag: "https://flagcdn.com/w40/ci.png",
        },
        {
          name: "Ecuador",
          flag: "https://flagcdn.com/w40/ec.png",
        },
      ],
    },
///////////////////////////////////////
    {
      group: "F",
      message:
        "Explore Group F and discover the teams chasing success in 2026.",
      teams: [
        {
          name: "Netherlands",
          flag: "https://flagcdn.com/w40/nl.png",
        },
        {
          name: "Japan",
          flag: "https://flagcdn.com/w40/jp.png",
        },
        {
          name: "Sweden",
          flag: "https://flagcdn.com/w40/se.png",
        },
        {
          name: "Tunisia",
          flag: "https://flagcdn.com/w40/tn.png",
        },
      ],
    },
///////////////////////////////////////
    {
      group: "G",
      message: "Discover the exciting teams competing in Group G.",
      teams: [
        {
          name: "Belgium",
          flag: "https://flagcdn.com/w40/be.png",
        },
        {
          name: "Egypt",
          flag: "https://flagcdn.com/w40/eg.png",
        },
        {
          name: "Iran",
          flag: "https://flagcdn.com/w40/ir.png",
        },
        {
          name: "New Zealand",
          flag: "https://flagcdn.com/w40/nz.png",
        },
      ],
    },
///////////////////////////////////////
    {
      group: "H",
      message: "Explore Group H and follow the teams chasing qualification.",
      teams: [
        {
          name: "Spain",
          flag: "https://flagcdn.com/w40/es.png",
        },
        {
          name: "Cape Verde",
          flag: "https://flagcdn.com/w40/cv.png",
        },
        {
          name: "Saudi Arabia",
          flag: "https://flagcdn.com/w40/sa.png",
        },
        {
          name: "Uruguay",
          flag: "https://flagcdn.com/w40/uy.png",
        },
      ],
    },
///////////////////////////////////////
    {
      group: "I",
      message: "Meet the nations competing in Group I.",
      teams: [
        {
          name: "France",
          flag: "https://flagcdn.com/w40/fr.png",
        },
        {
          name: "Senegal",
          flag: "https://flagcdn.com/w40/sn.png",
        },
        {
          name: "Iraq",
          flag: "https://flagcdn.com/w40/iq.png",
        },
        {
          name: "Norway",
          flag: "https://flagcdn.com/w40/no.png",
        },
      ],
    },
///////////////////////////////////////
    {
      group: "J",
      message: "Discover the football nations in Group J.",
      teams: [
        {
          name: "Argentina",
          flag: "https://flagcdn.com/w40/ar.png",
        },
        {
          name: "Algeria",
          flag: "https://flagcdn.com/w40/dz.png",
        },
        {
          name: "Austria",
          flag: "https://flagcdn.com/w40/at.png",
        },
        {
          name: "Jordan",
          flag: "https://flagcdn.com/w40/jo.png",
        },
      ],
    },
///////////////////////////////////////
    {
      group: "K",
      message: "Explore Group K and the teams competing for the next round.",
      teams: [
        {
          name: "Portugal",
          flag: "https://flagcdn.com/w40/pt.png",
        },
        {
          name: "DR Congo",
          flag: "https://flagcdn.com/w40/cd.png",
        },
        {
          name: "Uzbekistan",
          flag: "https://flagcdn.com/w40/uz.png",
        },
        {
          name: "Colombia",
          flag: "https://flagcdn.com/w40/co.png",
        },
      ],
    },
///////////////////////////////////////
    {
      group: "L",
      message: "Follow Group L and discover its talented national teams.",
      teams: [
        {
          name: "England",
          flag: "https://flagcdn.com/w40/gb-eng.png",
        },
        {
          name: "Croatia",
          flag: "https://flagcdn.com/w40/hr.png",
        },
        {
          name: "Ghana",
          flag: "https://flagcdn.com/w40/gh.png",
        },
        {
          name: "Panama",
          flag: "https://flagcdn.com/w40/pa.png",
        },
      ],
    },
  ]
///////////////////////////////////////
  return (
    <main className="home-page">
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
          <p className="hero-p">FIFA World Cup 2026</p>

          <h1>Explore the Biggest Football Tournament</h1>

          <p className="hero-text">
            Discover matches, teams, stadiums, events, groups, and join the
            community chat during the FIFA World Cup 2026.
          </p>

          <div className="hero-buttons">
            <Link to="/matches" className="btn first">
              View Matches
            </Link>
          </div>
        </div>
      </section>

      <section className="info-section">
        <h2>About the Tournament</h2>

        <div className="info-grid">
          <div className="info-card">
            <h3>Host Nations</h3>
            <p>
              Canada, Mexico, and the United States will host the 2026
              tournament.
            </p>
          </div>

          <div className="info-card">
            <h3>Key Dates</h3>
            <p>Opening match: June 11, 2026</p>
            <p>Final match: July 19, 2026</p>
          </div>

          <div className="info-card">
            <h3>Community</h3>
            <p>Chat with other football fans and share your thoughts.</p>
          </div>
        </div>
      </section>

      <section className="groups-section">
        <p className="section-tag">Tournament Groups</p>

        <h2>Discover the FIFA World Cup 2026 Groups</h2>

        <p className="groups-intro">
          Explore every group, discover the countries, and follow the teams
          competing for glory in the biggest football tournament.
        </p>

        <div className="groups-grid">
          {groupsData.map((group) => (
            <div className="group-card" key={group.group}>
              <div className="group-header">
                <h3>Group {group.group}</h3>
                <p>{group.message}</p>
              </div>

              <div className="group-teams">
                {group.teams.map((team) => (
                  <div className="group-team" key={team.name}>
                    <img
                      src={team.flag}
                      alt={team.name}
                      className="group-flag"
                    />
                    <span>{team.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="explore-section">
        <h2>Explore World Cup 2026</h2>

        <div className="explore-grid">
          <Link to="/matches" className="explore-card">
            <h3> Matches</h3>
            <p>View upcoming matches and match details.</p>
          </Link>

          <Link to="/stadiums" className="explore-card">
            <h3> Stadiums</h3>
            <p>Discover stadiums, cities, and capacities.</p>
          </Link>

          <Link to="/teams" className="explore-card">
            <h3>Teams</h3>
            <p>Explore teams, flags, coaches, and groups.</p>
          </Link>

          <Link to="/events" className="explore-card">
            <h3> Events</h3>
            <p>Find match and city events during the tournament.</p>
          </Link>

          <Link to="/rules" className="explore-card">
            <h3> Rules</h3>
            <p>Find new rules for FIFA 2026.</p>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
