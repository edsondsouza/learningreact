function createContainer(reactElement, container){
    /*
    const divcontainer = document.createElement(reactElement.type)
    divcontainer.innerHTML = reactElement.children
    divcontainer.setAttribute('href', reactElement.props.href)
    divcontainer.setAttribute('target', reactElement.props.target)

    container.appendChild(divcontainer)
    */

    const divcontainer = document.createElement(reactElement.type)
    divcontainer.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue
        divcontainer.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(divcontainer)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click here to visit Google'
}

const mainContainer = document.querySelector('#root')

createContainer(reactElement, mainContainer)