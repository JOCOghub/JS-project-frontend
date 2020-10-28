const header = document.getElementById("header")
  const form = document.getElementById('orchestraForm') //might need to be listForm
  const mainContainer = document.getElementById('container')

  form.addEventListener('submit', Orchestra.createOrchestra)
  header.addEventListener('click', reset)

  function reset(){
    mainContainer.innerHTML = ''
    mainContainer.innerHTML += `<form id="orchestraForm"> 
      <label for="">Name:</label>
      <input type="text" id="orchestraName">
      <input type="submit" >
    </form>`
    addListeners()
  }

  function addListeners() {
      const form = document.getElementById('orchestraForm')
      const div = document.createElement('div')
      div.id = "orchestraContainer"
      mainContainer.append(div)
      form.addEventListener('submit', Orchestra.createOrchestra)
      Orchestra.renderOrchestras()
  }


  Orchestra.fetchOrchestras()






// function createList() {
//   event.preventDefault()
//   const name = document.getElementById('listName').value
//   document.getElementById('listName').value = ""
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({list: {name: name}})
//   }
//
//   fetch("http://localhost:3000/lists", options)
//   .then(r => r.json())
//   .then(listObj => renderList(listObj.data) )
// }


// function renderList(list) {
//   let div = document.getElementById('listContainer')
//   let pgh = document.createElement('p')
//   pgh.innerText = list.attributes.name
//   div.append(pgh)
// }
//
// function renderLists(lists) {
//   for (list of lists) {
//     renderList(list)
//   }
// }
//
//
// function fetchLists() {
//   fetch("http://localhost:3000/lists")
//   .then(r => r.json())
//   .then(lists => renderLists(lists.data))
// }

// fetchLists()
