import { useEffect, useState } from "react"
import axios from "axios"

////////////////////////////////////

const Events = () => {
  const [events, setEvents] = useState([])
  const user = JSON.parse(localStorage.getItem("user"))
  const [editId, setEditId] = useState(null)

  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    city: "",
    country: "",
    location: "",
    date: "",
  })

  useEffect(() => {
    getEvents()
  }, [])

  ////////////////////////////////////

  const getEvents = async () => {
    const response = await axios.get("http://localhost:3229/event")
    setEvents(response.data)
  }

  ////////////////////////////////////

  const deleteEvent = async (id) => {
    await axios.delete(`http://localhost:3229/event/${id}`)
    getEvents()
  }

  ////////////////////////////////////

  const startEdit = (event) => {
    setEditId(event._id)

    setForm({
      name: event.name,
      description: event.description,
      image: event.image,
      city: event.city,
      country: event.country,
      location: event.location,
      date: event.date ? event.date.slice(0, 10) : "",
    })
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  ////////////////////////////////////

  const updateEvent = async (e) => {
    e.preventDefault()

    await axios.put(`http://localhost:3229/event/${editId}`, form)
    setEditId(null)

    setForm({
      name: "",
      description: "",
      image: "",
      city: "",
      country: "",
      location: "",
      date: "",
    })

    getEvents()
  }

  ////////////////////////////////////

  return (
    <main className="page-container">
      <h1>Events</h1>

      {editId && (
        <form className="admin-form" onSubmit={updateEvent}>
          <h2> Edit Event </h2>

          <input name="name" value={form.name} onChange={handleChange} />

          <input
            name="description"
            value={form.description}
            onChange={handleChange}
          />

          <input name="image" value={form.image} onChange={handleChange} />

          <input name="city" value={form.city} onChange={handleChange} />

          <input name="country" value={form.country} onChange={handleChange} />

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <button type="submit">Save Update</button>
        </form>
      )}

      <div className="c-grid">
        {events.map((event) => (
          <div className="s-card" key={event._id}>
            {event.image && <img src={event.image} alt={event.name} />}

            {/*  اهني سويناه جذي عشان اذا مافي صروة مايحمل صورة فارغة من عندة */}

            <h2> {event.name} </h2>

            <p> {event.description} </p>

            <p> Country: {event.country} </p>

            <p>City: {event.city} </p>

            <p> {new Date(event.date).toLocaleDateString()}</p>

            <a href={event.location} target="_blank" rel="noreferrer">
              View Location
            </a>

            {user?.isAdmin && (
              <div className="event-actions">
                <button onClick={() => startEdit(event)}>Edit</button>

                <button onClick={() => deleteEvent(event._id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}

export default Events
