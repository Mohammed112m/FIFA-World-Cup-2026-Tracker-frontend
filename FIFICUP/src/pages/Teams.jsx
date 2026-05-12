import { useEffect, useState } from "react"
import axios from "axios"

const Teams = () => {
  const [teams, setTeams] = useState([])
  const user = JSON.parse(localStorage.getItem("user"))
  const [editId, setEditId] = useState(null)

  const [form, setForm] = useState({
    name: "",
    coach: "",
    players: "",
    country: "",
    flag: "",
    groups: "",
  })

  useEffect(() => {
    getTeams()
  }, [])

  const getTeams = async () => {
    const response = await axios.get("http://localhost:3229/team")
    setTeams(response.data)
  }

  const deleteTeam = async (id) => {
    await axios.delete(`http://localhost:3229/team/${id}`)
    getTeams()
  }

  const startEdit = (team) => {
    setEditId(team._id)

    setForm({
      name: team.name,
      coach: team.coach,
      players: team.players,
      country: team.country,
      flag: team.flag,
      groups: team.groups,
    })
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const updateTeam = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3229/team/${editId}`, form)
    setEditId(null)

    setForm({
      name: "",
      coach: "",
      players: "",
      country: "",
      flag: "",
      groups: "",
    })
    getTeams()
  }

  return (
    <main className="page-container">
      <h1> Teams</h1>

      {editId && (
        <form className="admin-form" onSubmit={updateTeam}>
          <h2> Edit Teams </h2>

          <input name="name" value={form.name} onChange={handleChange} />

          <input name="coach" value={form.coach} onChange={handleChange} />

          <input name="players" value={form.players} onChange={handleChange} />

          <input name="country" value={form.country} onChange={handleChange} />

          <input name="flag" value={form.flag} onChange={handleChange} />

          <input name="groups" value={form.groups} onChange={handleChange} />

          <button type="submit">Save Update</button>
        </form>
      )}

      <div className="c-grid">
        {teams.map((team) => (
          <div className="s-card" key={team._id}>
            {team.flag && <img src={team.flag} alt={team.name} />}

            <h2> {team.name} </h2>

            <p> Country: {team.country}</p>

            <p> Coach: {team.coach}</p>

            <p> Players:{team.players}</p>

            <p> Group: {team.groups}</p>

            {user?.isAdmin && (
              <div className="team-actions">
                <button onClick={() => startEdit(team)}>Edit</button>

                <button onClick={() => deleteTeam(team._id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}

export default Teams
