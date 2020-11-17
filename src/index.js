const header = document.getElementById("header")
const form = document.getElementById('orchestraForm') 
const form2 = document.getElementById('findForm')
const mainContainer = document.getElementById('container')
form.addEventListener('submit', Orchestra.createOrchestra)
form2.addEventListener('submit', Instrument.findInstrument)
header.addEventListener('click', reset)
 

function reset(){
  mainContainer.innerHTML = ''
  mainContainer.innerHTML += `<form id="orchestraForm">
    <label for="">Name:</label>
    <input type="text" id="orchestraName">
    <input type="submit" >
  </form>`
  mainContainer.innerHTML +=`<form id="findForm">
  <label for="">Find Instrument</label>
  <input type="text" id="queryInput" >
  <input type="submit"> 
</form>`
  addListeners()
}

function addListeners() {
  const form = document.getElementById('orchestraForm')
  const div = document.createElement('div')
  const form2 = document.getElementById('findForm')
  div.id = "orchestraContainer"
  mainContainer.append(div)
  form.addEventListener('submit', Orchestra.createOrchestra)
  form2.addEventListener('submit', Instrument.findInstrument) 
  Orchestra.renderOrchestras()
}

 
Orchestra.fetchOrchestras()
