import { useEffect, useState } from "react"
import axios from "axios"

//////////////////////////////////

const Stadiums = () => {
  const [stadiums, setStadiums] = useState([])
  const user = JSON.parse(localStorage.getItem("user"))
  const [editId, setEditId] = useState(null)

  const [form, setForm] = useState({
    name: "",
    country: "",
    city: "",
    capacity: "",
    image: "",
    location: "",
  })

  useEffect(() => {
    getStadiums()
  }, [])

  ////////////////////////////////////

  const getStadiums = async () => {
    const response = await axios.get("http://localhost:3229/stadium")
    setStadiums(response.data)
  }
  ////////////////////////////////////

  const updateStadium = async (e) => {
    e.preventDefault()

    await axios.put(`http://localhost:3229/stadium/${editId}`, form)
    setEditId(null)

    setForm({
      name: "",
      country: "",
      city: "",
      capacity: "",
      image: "",
      location: "",
    })
    getStadiums()
  }
  const deleteStadium = async (id) => {
    await axios.delete(`http://localhost:3229/stadium/${id}`)
    getStadiums()
  }
  ////////////////////////////////////

  const startEdit = (stadium) => {
    setEditId(stadium._id)

    setForm({
      name: stadium.name,
      country: stadium.country,
      city: stadium.city,
      capacity: stadium.capacity,
      image: stadium.image,
      location: stadium.location,
    })
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  ////////////////////////////////////

  return (
    <main className="page-container">
      <h1> 🏟️ Stadiums</h1>

      {editId && (
        <form className="admin-form" onSubmit={updateStadium}>
          <h2> Edit Stadiums </h2>

          <input name="name" value={form.name} onChange={handleChange} />

          <input name="country" value={form.country} onChange={handleChange} />

          <input name="city" value={form.city} onChange={handleChange} />

          <input
            name="capacity"
            value={form.capacity}
            onChange={handleChange}
          />

          <input name="image" value={form.image} onChange={handleChange} />

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
          />

          <button type="submit">Save Update</button>
        </form>
      )}

      <div className="c-grid">
        {stadiums.map((stadium) => (
          <div className="s-card" key={stadium._id}>
            {stadium.image && <img src={stadium.image} alt={stadium.name} />}

            <h2> {stadium.name} </h2>

            <p> Country: {stadium.country} </p>

            <p> City: {stadium.city} </p>

            <p> Capacity: {stadium.capacity} </p>

            <a href={stadium.location} target="_blank" rel="noreferrer">
              View Location
            </a>

            {user?.isAdmin && (
              <div className="stadium-actions">
                <button onClick={() => startEdit(stadium)}>Edit</button>

                <button onClick={() => deleteStadium(stadium._id)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}

export default Stadiums
