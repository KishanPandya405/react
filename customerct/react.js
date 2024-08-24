import { Children } from "react"

function customRender(reactElement, container){
    
}

const reactElement = {
    type: 'a',
    props: {
        href: 'htts://google.com',
        target: '_blank'
    },
    Children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)