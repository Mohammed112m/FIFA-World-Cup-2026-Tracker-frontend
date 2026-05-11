import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

/////////////////////////////////////////////

const SignUp = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        "http://localhost:3229/auth/signup",
        form
      )

      if (response.status === 201) {
        alert("Account created successfully")
        navigate("/signin")
      }
    } catch (error) {
      alert("Sign up failed")
    }
  }

  return (
    <section className="page-section">
      <div className="auth-box">
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit} className="donation-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="main-btn">
            Create Account
          </button>
        </form>

        <p className="auth-text">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </section>
  )
}

export default SignUp
