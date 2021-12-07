import React from 'react'
import { Link } from 'react-router-dom'

const Lifestyle = () => {
  const choices = []
  return (
    <div className='home container'>
      <h2>Step 1 of 4: Choose your retirement lifestyle</h2>
      <div>
      <h4>Retirement Standard for a single person aged around 65</p>

      <label>
      Modest: $598 per week
      <input
      type="radio"
      value="598"
      />
      </label>
      </div>
      <div>
      <Link to="/savings">
        <button>
          Next step
        </button>
      </Link>
      </div>
    </div>
  )
}

export default Lifestyle
