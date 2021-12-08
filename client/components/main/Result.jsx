import React from 'react'
import { Link } from 'react-router-dom'

const Result = ({ plan }) => {
  const { lifestyle, savings, contribution, roi } = plan
  console.log(lifestyle, savings, contribution, roi)
  const pmt = Number(contribution)
  const rate = Number(roi / 100)
  const PV = Number(savings)
  const FV = -(lifestyle * 25 * 52)
  const phase1 = ((pmt / rate) - FV) / ((pmt / rate) + PV)
  const phase2 = 1 + rate
  const log1 = Math.log(phase1)
  const log2 = Math.log(phase2)
  const retirementAge = Math.floor(log1 / log2)


  // const Nper = Log((Pmt/Rate - FV) / (Pmt/Rate + PV)) / Log(1+Rate)'
  return (
    <div className= "result container" >
      <p> Based on your input, your retirement age is </p>
      <h1>{retirementAge}</h1>
      <Link to="/">
        <button>
          Return to Home
        </button>
      </Link>
    </div>

  )
}

export default Result

// PV * ( 1 + Rate )Nper + ( Pmt * ( 1 + ( Rate * Type ) ) * ( ( 1 + Rate )Nper - 1 ) / Rate ) + FV = 0

// This original equation expresses that FV will have opposite sign from the PV and Pmt items.

// First term relates to the growth of the original stash.

// Second term is the formula for the sum of annuity, the geometric series.

// Note that we need this to include (1 + r) if we are making payments at beginnings, hence the (1 + (Rate * Type)) term.

// This can be solved for Nper.

// Your original equation rearranges as

// FV = Pmt * (1+(Rate * Type)) * (1-(1+Rate)Nper)/Rate - PV * (1+Rate)Nper

// If type = 0, this reduces to

// FV = Pmt * (1-(1+Rate)Nper)/Rate - PV * (1+Rate)Nper

// = Pmt/Rate - (Pmt/Rate + PV) * (1+Rate)Nper

// Therefore

// Pmt/Rate - FV = (Pmt/Rate + PV) * (1+Rate)Nper

// Take logarithm of both sides.

// Log(Pmt/Rate - FV) = Log((Pmt/Rate + PV) * (1+Rate)Nper)

// = Log(Pmt/Rate + PV) + Nper * Log(1+Rate)

// Solve for Nper.

// Nper = (Log(Pmt/Rate - FV) - Log(Pmt/Rate + PV)) / Log(1+Rate)

// Finally ...

// Nper = Log((Pmt/Rate - FV) / (Pmt/Rate + PV)) / Log(1+Rate)

// That is the result if Type is 0.
