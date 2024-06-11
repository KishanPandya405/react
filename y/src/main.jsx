import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>It Is me Kishan Pandya !</h1>
    </div>
  )
}

/* const anotherElement = {
  props: {
  type: 'a',
  href: 'https://google.com',
  target: '_blank',
},
children: 'click me to visit google'
}
 */

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit google</a>
)

const anotherUser = "kp is back"

const reactElement = React.createElement (
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click Me To Visit Google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement
 
)
