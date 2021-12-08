import React from 'react'
import { Link } from 'react-router-dom'

const Lifestyle = ({ addLifestyle, plan }) => {
  const lifestyles = [
    {
      choice: 'A “no frills” lifestyle for one person',
      spend: 598
    },
    {
      choice: 'A comfortable lifestyle for one person',
      spend: 1190
    },
    {
      choice: 'A “no frills” lifestyle for two people',
      spend: 885
    },
    {
      choice: 'A comfortable lifestyle for two people',
      spend: 1418
    }

  ]
  return (
    <div className='home container'>
      <h2>Step 1 of 4: Choose your retirement lifestyle </h2>
      <ul>
        {lifestyles.map(lifestyle => {
          const { choice, spend } = lifestyle
          const spanClass = plan.lifestyle === lifestyle.spend ? 'active' : ''
          return (
            <li key={lifestyle.spend} onClick={() => addLifestyle(spend)}>
              <span className={spanClass}>
                {choice}{`:  $${spend} per week`}
              </span>
            </li>
          )
        })}
      </ul>


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

//  {lifestyles.map((lifestyle, i) => {
//         const spanClass = plan.lifestyle === lifestyle.spend ? 'active ' : NaN
//         return (
//           <li key={i} onClick={() => addLifestyle(lifestyle.spend)}>

//           </li>
//         )
//       })}
