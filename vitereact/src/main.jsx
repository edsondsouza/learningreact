import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>Custom React!</h1>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click here to visit Google'
// }

const anotherElement = (
  <a href="https://google.com">Visit Google</a>
)

const anotheruser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
  // anotherElement
  // <App />

)
