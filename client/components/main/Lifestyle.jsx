import React from 'react'
import { Link } from 'react-router-dom'

const Lifestyle = () => {
  const choices = []
  return (
    <div className='home container'>
      <h2>Step 1 of 4: Choose your retirement lifestyle</h2>

      <Link to="/savings">
        <button>
          Next step
        </button>
      </Link>
    </div>
  )
}

export default Lifestyle
