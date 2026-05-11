import { useEffect, useState } from "react"
import axios from "axios"

const Matches = () => {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    getMatches()
  }, [])

  const getMatches = async () => {
    const response = await axios.get("http://localhost:3229/match")
    setMatches(response.data)
  }

  return (
    <main className="page-container">
      <h1>Matches</h1>

      <div className="cards-grid">
        {matches.map((match) => (
          <div className="simple-card" key={match._id}>
            <h2>{match.name}</h2>
            <p>📅 {new Date(match.date).toLocaleDateString()}</p>
            <p>⏰ {match.time}</p>
            <p>
              ⚽ {match.team1?.name} vs {match.team2?.name}
            </p>
            <p>🏟 {match.stadium?.name}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Matches
