  const header = document.getElementById("header")
  const form = document.getElementById('orchestraForm')
  const mainContainer = document.getElementById('container')
  const form2 = document.getElementById('findForm')
  
  form.addEventListener('submit', Orchestra.createOrchestra)
  form2.addEventListener('click', Instrument.findInstrument)
  header.addEventListener('click', reset)

  function reset(){
    mainContainer.innerHTML = ''
    mainContainer.innerHTML += `<form id="orchestraForm">
      <label for="">Name:</label>
      <input type="text" id="orchestraName">
      <input type="submit" >
    </form>`
    mainContainer.innerHTML +=`<form id="findForm">
    <label for="">Find Instrument:</label>
    <input type="text" id="instrumentName">
    <button type="button">Find Instrument</button>
  </form>` 
    addListeners()
  }

  function addListeners() {
      const form = document.getElementById('orchestraForm')
      const form2 = document.getElementById('findForm')
      const div = document.createElement('div')
      div.id = "orchestraContainer"
      mainContainer.append(div)
      form.addEventListener('submit', Orchestra.createOrchestra)
      form2.addEventListener('click', Instrument.findInstrument) //look at other bind
      Orchestra.renderOrchestras()
  }


  Orchestra.fetchOrchestras()
