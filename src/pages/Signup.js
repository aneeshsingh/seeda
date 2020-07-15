import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import SignupForm from "../components/Forms/SignupForm"

const Signup = () => {
  return (
    <div>
      <Header />
      <SignupForm />
      <Link to="/Onboarding/">Back to Home</Link>
      <Footer />
    </div>
  )
}

export default Signup
