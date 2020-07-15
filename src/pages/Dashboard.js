import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Campaign from "../components/Dashboard/Campaign"

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Campaign />
      <Link to="/Onboarding/">Back to Home</Link>
      <Footer />
    </div>
  )
}

export default Dashboard
