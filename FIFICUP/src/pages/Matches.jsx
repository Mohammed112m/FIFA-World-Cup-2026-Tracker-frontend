import { useEffect, useState } from "react"
import axios from "axios"

////////////////////////////////////

const Matches = () => {
  const [matches, setMatches] = useState([])
  const [events, setEvents] = useState([])
  const user = JSON.parse(localStorage.getItem("user"))
  const [editId, setEditId] = useState(null)

  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    team1: "",
    team2: "",
    stadium: "",
  })

  useEffect(() => {
    getMatches()
    getEvents()
  }, [])

  ////////////////////////////////////

  const getMatches = async () => {
    const response = await axios.get("http://localhost:3229/match")
    setMatches(response.data)
  }

  ////////////////////////////////////

  const getEvents = async () => {
    const response = await axios.get("http://localhost:3229/event")
    setEvents(response.data)
  }
  ////////////////////////////////////

  const deleteMatch = async (id) => {
    await axios.delete(`http://localhost:3229/match/${id}`)
    getMatches()
  }

  ////////////////////////////////////

  const startEdit = (match) => {
    setEditId(match._id)
    setForm({
      name: match.name,
      date: match.date ? match.date.slice(0, 10) : "",
      time: match.time,
      team1: match.team1?._id || match.team1,
      team2: match.team2?._id || match.team2,
      stadium: match.stadium?._id || match.stadium,
    })
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  ////////////////////////////////////

  const updateMatch = async (e) => {
    e.preventDefault()

    await axios.put(`http://localhost:3229/match/${editId}`, form)
    setEditId(null)

    setForm({
      name: "",
      date: "",
      time: "",
      team1: "",
      team2: "",
      stadium: "",
    })
    getMatches()
  }

  ////////////////////////////////////

  return (
    <main className="page-container">
      <h1>Matches</h1>

      {editId && (
        <form className="admin-form" onSubmit={updateMatch}>
          <h2> Edit Match </h2>

          <input name="name" value={form.name} onChange={handleChange} />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <input name="time" value={form.time} onChange={handleChange} />

          <input name="team1" value={form.team1} onChange={handleChange} />

          <input name="team2" value={form.team2} onChange={handleChange} />

          <input name="stadium" value={form.stadium} onChange={handleChange} />

          <button type="submit"> Save Update </button>
        </form>
      )}

      <div className="cards-grid">
        {matches.map((match) => {
          const matchEvents = events.filter(
            (event) =>
              event.match?._id === match._id || event.match === match._id
          )
          return (
            <div className="simple-card" key={match._id}>
              <h2>{match.name}</h2>

              <p> {new Date(match.date).toLocaleDateString()}</p>

              <p> {match.time}</p>

              <p>
                {match.team1?.name} vs {match.team2?.name}{" "}
              </p>

              <p>{match.stadium?.name}</p>

              {match.stadium?.location && (
                <a
                  href={match.stadium.location}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Stadium Location
                </a>
              )}

              {matchEvents.length > 0 && (
                <div className="match-events">
                  <h4>Match Events</h4>

                  {matchEvents.map((event) => (
                    <div className="match-event-card" key={event._id}>
                      <p>{event.name}</p>

                      {event.location && (
                        <a
                          href={event.location}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Event Location
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {user?.isAdmin && (
                <div className="match-actions">
                  <button onClick={() => startEdit(match)}>Edit</button>

                  <button onClick={() => deleteMatch(match._id)}>Delete</button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Matches
