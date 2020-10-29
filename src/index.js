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
