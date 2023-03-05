// Variables and Functions
// ***************************************
 const APIURL = 'https://assenfuego.com/api/garden'

const renderHtml = (paramWhere, paramWhat) =>  document.querySelector(paramWhere).innerHTML = paramWhat

let dataContainer = ""
const processDataEach = paramProcessEach => dataContainer += dataContainerEach(paramProcessEach)

const dataContainerEach = paramContainerEach => 
`<div class="menu-items__item">
    <article>
        <img src="${paramContainerEach.image}">
        <h2>${paramContainerEach.title}</h2>
        <p>${paramContainerEach.description}</p>
        <p><strong>Common Name</strong>: ${paramContainerEach['common name']}</p>
        <p><strong>Sun</strong>: ${paramContainerEach.sun}</p>
        <p><strong>Soil</strong>: ${paramContainerEach.soil}</p>
        <p><strong>Water</strong>: ${paramContainerEach.water}</p>
        <p><strong>Native</strong>: ${paramContainerEach.native}</p>
        <p><strong>Reference</strong>: <a href="${paramContainerEach['content source']}" target="_blank">Content source.</a></p>
    </article>
</div>`


// Action
// ***************************************
fetch(APIURL)
.then(response => response.json())
.then(dataCore => {
    
    dataCore.forEach(dataCoreEach => { processDataEach(dataCoreEach) })

    renderHtml('.htmlDisplay',dataContainer)    
})