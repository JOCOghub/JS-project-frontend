  const header = document.getElementById("header")
  const form = document.getElementById('orchestraForm')
  const mainContainer = document.getElementById('container')
  const form2 = document.getElementById('findForm')
  form.addEventListener('submit', Orchestra.createOrchestra)
  form2.addEventListener('submit', Instrument.findInstrument)//bind?
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
    
  </form>`
    addListeners()
  }

  function addListeners() {
      const form = document.getElementById('orchestraForm')
      const form2 = document.getElementById('findForm')
      const findbutton = document.createElement('button')
      findbutton.innerText = "Find"
      form2.append(findbutton)
      const div = document.createElement('div')
      div.id = "orchestraContainer"
      mainContainer.append(div)
      form.addEventListener('submit', Orchestra.createOrchestra)//how is this value being passed?
      form2.addEventListener('click', Instrument.findInstrument) //look at other bind
      Orchestra.renderOrchestras()
  }


  Orchestra.fetchOrchestras()
