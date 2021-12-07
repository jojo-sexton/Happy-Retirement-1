const LIFESTYLE = 'LIFESTYLE'
const ADD_SAVINGS = 'ADD_SAVINGS'

export function lifestyle (lifestyle) {
  return {
    type: LIFESTYLE,
    lifestyle: lifestyle
  }
}

export function addSavings (savings) {
  return {
    type: ADD_SAVINGS,
    savings: savings
  }
}