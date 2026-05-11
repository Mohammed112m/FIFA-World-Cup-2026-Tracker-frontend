import { useEffect, useState } from "react"
import axios from "axios"

//////////////////////////////////

const Stadiums = () => {
  const [stadiums, setStadiums] = useState([])

  useEffect(() => {
    getStadiums()
  }, [])

  const getStadiums = async () => {
    const response = await axios.get("http://localhost:3229/stadium")
    setStadiums(response.data)
  }

  return (
    <main className="page-container">
      <h1> 🏟️ Stadiums</h1>

      <div className="c-grid">
        {stadiums.map((stadium) => (
          <div className="s-card" key={stadium._id}>
            <img src={stadium.image} alt={stadium._id} />

            <h2> {stadium.name} </h2>

            <p> Country: {stadium.country} </p>

            <p> City: {stadium.city} </p>

            <p> Capacity: {stadium.capacity} </p>

            <a href={stadium.location} target="_blank" rel="noreferrer">
              View Location
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Stadiums
