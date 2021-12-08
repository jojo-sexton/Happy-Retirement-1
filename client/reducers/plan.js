import { ADD_SAVINGS } from '../actions/plan'

const emptyPlan = {
  lifestyle: NaN,
  savings: NaN,
  contribution: NaN,
  interest: NaN,
  tax: NaN,
  ageNow: NaN
}

export default function plan (state = emptyPlan, action) {
  switch (action.type) {
    case ADD_SAVINGS:
      return
      { savings }

    default:
      return state
  }
}
