
// take the state and return string for use as state class name
const stateClassNames = {
  [-1]: 'Deprecated',
  0: 'coming-soon',
  1: 'good',
  2: 'medium',
  3: 'bad'
}
export const stateToCss = (state: number) => stateClassNames[state];

const stateLabels = {
  [-1]: 'Deprecated',
  0: 'Coming soon',
  1: 'Good to go',
  2: 'Some events may be unavailable',
  3: 'Events are currently unavailable'
}

export const stateToTxt = (state: number) => stateLabels[state];;