import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custome App</h1>
    </div> 
  )
}

const reactElement = {
  type: 'a',
  props: {
      href: 'https://www.tridevitsolution.com/',
      target: '_blank'
  },
  Children: 'click me to visit google'
}

const anotherElement = (
  <a href='https://www.tridevitsolution.com/' target='_blank'>Visit Site</a>
)

createRoot(document.getElementById('root')).render(
 
    anotherElement
  
)
 