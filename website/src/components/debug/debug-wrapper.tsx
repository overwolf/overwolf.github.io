import React from 'react';
import useDebugInfoHook from './debug-info-hook';

function DebugComp(Component: () => JSX.Element, props: any) {
  // debugInfo object and setter - shortened for convenience
  const [debug, setDebug] = useDebugInfoHook();

  return (
    <div style={
      // If debug.color is toggled, show a random background color
      debug.color ? {backgroundColor: colorPicker()} : {}
    }>
      <button onClick={() => setDebug({name: debug.name, color: !debug.color})}>Power</button>
      <Component {...props}/>
      {
        // If debug.name is toggled, show the name of the component
        debug.name && Component.name
      }
    </div>
  )
}

const backgroundColors = [
  'grey',
  'red',
  'blue',
  'yellow',
  'green',
  'white',
  'black'
]

function colorPicker() {
  return backgroundColors[Math.floor(Math.random()*backgroundColors.length)]
}

export default function DebugWrapper(Component: () => JSX.Element) {
  return (props: any) => DebugComp(Component, props);
}