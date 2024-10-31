function customRender(reactElement, container){
const domElement = document.createElement( reactElement.type)

 
// domElement.innerHTML = reactElement.children 
// domElement.setAttribute('href', reactElement.props.href)  
// domElement.setAttribute('target', reactElement.props.target)
// domElement.setAttribute('h1', reactElement.props.size)

// container.appendChild(domElement)
domElement.innerHTML = reactElement.children 
for(const prop in reactElement.props){
    domElement.setAttribute(prop,reactElement. props[prop])
}
    container.appendChild(domElement)

}
const reactElement = {
    type: 'a',
    
    props: {
        href: 'https://www.google.com',
        target: '_blank',
        size: 'h1',

    },
    children: 'Hello World'
}
const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)