// Setup and Functions
// ***************************************
const APIURL = 'http://localhost:4000/json'

const htmlDisplayElement = paramWhere => document.querySelector(paramWhere)

let htmlContainer = ''

const processHtmlEach = paramEach => {
    let htmlEach =
    `
    <div class="menu-items__item">
        <img src="${paramEach.image}">
        <div>
            <h3>${paramEach.id} ${paramEach.title}</h3>
            <p>${paramEach.description}</p>
            <p>${paramEach.ingredients}</p>
        </div>
  </div>`

  htmlContainer += htmlEach
}

const renderHtml = (paramWhere, paramWhat) =>  paramWhere.innerHTML = paramWhat



// Action
// ***************************************
fetch(APIURL)
.then(response => response.json())
.then(dataContainer => {
    
    dataContainer.forEach(dataEach => {
        processHtmlEach(dataEach)
    })

    renderHtml(htmlDisplayElement('.htmlDisplay'),htmlContainer)    
})