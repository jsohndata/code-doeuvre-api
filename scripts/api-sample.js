// Variables and Functions
// ***************************************
const APIURL = 'http://localhost:4000/json'

const renderHtml = (paramWhere, paramWhat) =>  document.querySelector(paramWhere).innerHTML = paramWhat

let dataContainer
const processDataEach = paramProcessEach => dataContainer += dataContainerEach(paramProcessEach)

const dataContainerEach = paramContainerEach => 
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
.then(dataCore => {
    
    dataCore.forEach(dataCoreEach => { processDataEach(dataCoreEach) })

    renderHtml('.htmlDisplay',dataContainer)    
})