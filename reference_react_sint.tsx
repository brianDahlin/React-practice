import React, {createElement as element, useState} from 'react';

function App() {
const [count, setCount]= useState(0)

  return element('div', {className: 'container'}, [
  element('h1', {
    className: 'font-bold', 
    key: 1
  }, `Hello, are you ok? ${count}`),
  element('button', {
    className: 'py-2 px-4 border', 
    key: 2,
    onClick: () => {
      setCount(count + 1)
    }
  }, ' Click!!!'),
])
}

export default App;
