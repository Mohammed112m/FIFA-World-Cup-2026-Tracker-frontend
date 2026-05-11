import { useState, useEffect } from "react"
import axios from "axios"

//////////////////////////////////////////////////////////

const Admin = () => {
  const [activeForm, setActiveForm] = useState("match")

  return (
    <main className="admin-page">
      <h1>Admin Dashboard</h1>

      <p>Add new data to the website</p>

      <div className="admin-tabs">
        <button onClick={() => setActiveForm("match")}>Add Match</button>

        <button onClick={() => setActiveForm("team")}>Add Team</button>

        <button onClick={() => setActiveForm("stadium")}>Add Stadium</button>

        <button onClick={() => setActiveForm("event")}>Add Event</button>
      </div>

      {activeForm === "match" && <AddMatch />}

      {activeForm === "team" && <AddTeam />}

      {activeForm === "stadium" && <AddStadium />}

      {activeForm === "event" && <AddEvent />}
    </main>
  )
}

//////////////////Add Match////////////////////////////////////////

const AddMatch = () => {
  const [teams, setTeams] = useState([])
  const [stadiums, setStadiums] = useState([])

  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    team1: "",
    team2: "",
    stadium: "",
  })

  useEffect(() => {
    getTeams()
    getStadiums()
  }, [])

  const getTeams = async () => {
    const response = await axios.get("http://localhost:3229/team")
    setTeams(response.data)
  }

  const getStadiums = async () => {
    const response = await axios.get("http://localhost:3229/stadium")
    setStadiums(response.data)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await axios.post("http://localhost:3229/match", form)

    if (response.status === 201) {
      alert("Match added successfully")

      setForm({
        name: "",
        date: "",
        time: "",
        team1: "",
        team2: "",
        stadium: "",
      })
    }
  }

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <h2>Add Match</h2>

      <input
        name="name"
        placeholder="Match Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />

      <input
        name="time"
        placeholder="Time"
        value={form.time}
        onChange={handleChange}
      />

      <select name="team1" onChange={handleChange}>
        value={form.team1}
        <option>Select Team 1</option>
        {teams.map((team) => (
          <option key={team._id} value={team._id}>
            {team.name}
          </option>
        ))}
      </select>

      <select name="team2" onChange={handleChange}>
        value={form.team2}
        <option>Select Team 2</option>
        {teams.map((team) => (
          <option key={team._id} value={team._id}>
            {team.name}
          </option>
        ))}
      </select>

      <select name="stadium" onChange={handleChange}>
        value={form.stadium}
        <option>Select Stadium</option>
        {stadiums.map((stadium) => (
          <option key={stadium._id} value={stadium._id}>
            {stadium.name}
          </option>
        ))}
      </select>

      <button>Add Match</button>
    </form>
  )
}

////////////////Add team //////////////////////////////////////////

const AddTeam = () => {
  const [form, setForm] = useState({
    name: "",
    coach: "",
    players: "",
    country: "",
    flag: "",
    groups: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await axios.post("http://localhost:3229/team", form)

    if (response.status === 201) {
      alert("Team added successfully")

      setForm({
        name: "",
        coach: "",
        players: "",
        country: "",
        flag: "",
        groups: "",
      })
    }
  }

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <h2>Add Team</h2>

      <input
        name="name"
        placeholder="Team Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="coach"
        placeholder="Coach"
        value={form.coach}
        onChange={handleChange}
      />

      <input
        name="players"
        placeholder="Players"
        value={form.players}
        onChange={handleChange}
      />

      <input
        name="country"
        placeholder="Country"
        value={form.country}
        onChange={handleChange}
      />

      <input
        name="flag"
        placeholder="Flag Image URL"
        value={form.flag}
        onChange={handleChange}
      />

      <input
        name="groups"
        placeholder="Group"
        value={form.groups}
        onChange={handleChange}
      />

      <button>Add Team</button>
    </form>
  )
}

//////////////Add Stadium////////////////////////////////////////////

const AddStadium = () => {
  const [form, setForm] = useState({
    name: "",
    country: "",
    city: "",
    capacity: "",
    image: "",
    location: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await axios.post("http://localhost:3229/stadium", form)

    if (response.status === 201) {
      alert("Stadium added successfully")

      setForm({
        name: "",
        country: "",
        city: "",
        capacity: "",
        image: "",
        location: "",
      })
    }
  }

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <h2>Add Stadium</h2>

      <input
        name="name"
        placeholder="Stadium Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="country"
        placeholder="Country"
        value={form.country}
        onChange={handleChange}
      />

      <input
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
      />

      <input
        name="capacity"
        placeholder="Capacity"
        value={form.capacity}
        onChange={handleChange}
      />

      <input
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Location Link"
        value={form.location}
        onChange={handleChange}
      />

      <button>Add Stadium</button>
    </form>
  )
}

//////////////////////////Add Event////////////////////////////////

const AddEvent = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    city: "",
    country: "",
    location: "",
    date: "",
    match: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await axios.post("http://localhost:3229/event", form)

    if (response.status === 201) {
      alert("Event added successfully")

      setForm({
        name: "",
        description: "",
        image: "",
        city: "",
        country: "",
        location: "",
        date: "",
        match: "",
      })
    }
  }

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <h2>Add Event</h2>

      <input
        name="name"
        placeholder="Event Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />

      <input
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={handleChange}
      />

      <input
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
      />

      <input
        name="country"
        placeholder="Country"
        value={form.country}
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />

      <input
        name="match"
        placeholder="Match "
        value={form.match}
        onChange={handleChange}
      />

      <button>Add Event</button>
    </form>
  )
}

export default Admin
