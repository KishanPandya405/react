import { Children } from "react"


function customRender(reactElement, container){
    /*
    const domElement = document.createElement (reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href' ,reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */
   const domElement = document.createElement(reactElement.type)
   document.innerHTML = reactElement.Children
   for (const prop in reactElement.props){
    if (prop === 'Children') continue;
    domElement.setAttribute(prop,reactElement.props [prop])
   }
   container.appendChiled(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.tridevitsolution.com/',
        target: '_blank'
    },
    Children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)