// Variables and Functions
// ***************************************
const APIURL = 'http://localhost:4000/json'

const renderHtml = (paramWhere, paramWhat) =>  document.querySelector(paramWhere).innerHTML = paramWhat

let dataContainer
const processDataEach = paramProcessEach => dataContainer += dataContainerEach(paramProcessEach)

const dataContainerEach = paramDataEach => 
`<div class="menu-items__item">
    <img src="${paramDataEach.image}">
    <div>
        <h3>${paramDataEach.id} ${paramDataEach.title}</h3>
        <p>${paramDataEach.description}</p>
        <p>${paramDataEach.ingredients}</p>
    </div>
</div>`


// Action
// ***************************************
fetch(APIURL)
.then(response => response.json())
.then(dataContainer => {
    
    dataContainer.forEach(dataEach => { processDataEach(dataEach) })

    renderHtml('.htmlDisplay',dataContainer)    
})