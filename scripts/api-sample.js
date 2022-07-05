// Setup and Functions
// ***************************************
const APIURL = 'http://localhost:4000/json'

const htmlDisplayElement = paramWhere => document.querySelector(paramWhere)

const renderHtml = (paramWhere, paramWhat) =>  paramWhere.innerHTML = paramWhat

let htmlContainer
const processHtmlEach = paramProcessEach => htmlContainer += htmlContainerEach(paramProcessEach)

const htmlContainerEach = paramContainerEach => 
`<div class="menu-items__item">
    <img src="${paramContainerEach.image}">
    <div>
        <h3>${paramContainerEach.id} ${paramContainerEach.title}</h3>
        <p>${paramContainerEach.description}</p>
        <p>${paramContainerEach.ingredients}</p>
    </div>
</div>`


// Action
// ***************************************
fetch(APIURL)
.then(response => response.json())
.then(dataContainer => {
    
    dataContainer.forEach(dataEach => { processHtmlEach(dataEach) })
    
    renderHtml(htmlDisplayElement('.htmlDisplay'),htmlContainer)    
})