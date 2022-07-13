
// take the state and return string for use as state class name
export const stateToCss = (state) => {
  let css = '';
  switch (state) {
    case 1:
      css = 'good';
      break;
    case 2:
      css = 'medium';
      break;
    case 3:
      css = 'bad';
      break;
  }
  return css;
}