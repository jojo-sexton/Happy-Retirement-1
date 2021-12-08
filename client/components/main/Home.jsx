import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home container">
      <h2>
        When can I retire?
      </h2>
      <p>This calculator gives you a snapshot of your retirement goals and how you're generally tracking towards them</p>
      <Link to="/age">
        <button>
          {'Let\'s find out'}
        </button>
      </Link>
    </div>
  )
}

export default Home
