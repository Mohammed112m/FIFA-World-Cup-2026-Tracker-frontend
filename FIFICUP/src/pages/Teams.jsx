import { useEffect, useState } from "react"
import axios from "axios"

const Teams = () => {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    getTeams()
  }, [])

  const getTeams = async () => {
    const response = await axios.get("http://localhost:3229/team")
    setTeams(response.data)
  }

  return (
    <main className="page-container">
      <h1> Teams</h1>

      <div className="'c-grid">
        {teams.map((team) => (
          <div className="s-card" key={team._id}>
            <img src={team.flag} alt={team.name} />

            <h2> {team.name} </h2>

            <p> Country: {team.country}</p>

            <p> Coach: {team.coach}</p>

            <p> Players:{team.players}</p>

            <p> Group: {team.groups}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Teams
