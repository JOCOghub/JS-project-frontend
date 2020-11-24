class Orchestra {

    static allOrchestras = []
  
    constructor(orchestra) {
        this.name = orchestra.attributes.name
        this.id = orchestra.id
        this.instruments = orchestra.attributes.instruments.map(instrument => new Instrument(instrument))
        Orchestra.allOrchestras.push(this)
    }
  
    renderOrchestra() {
      let div = document.getElementById('orchestraContainer')
      let ptag = document.createElement("p")
      let orcButton = document.createElement('button')
      orcButton.innerText = "delete"
      ptag.id = this.id
      ptag.innerText = this.name
      ptag.addEventListener('click', this.showOrchestra.bind(this))
      div.append(ptag)
      ptag.append(orcButton)//here
      orcButton.addEventListener('click', this.deleteOrchestra.bind(ptag))
    }
  
  
    showOrchestra() {
      let container = document.getElementById('container')
      let h3 = document.createElement('h3')
      let ul = document.createElement("ul")
      let form = document.createElement("form")
      let label = document.createElement("label")
      let input = document.createElement('input')
      let button = document.createElement("input")
      button.type = "submit"
      button.innerText = "submit"
      input.id = "content"
      label.innerText = "Content:"
      form.id = "instrumentForm"
      ul.id = "orchestraUl"
      form.append(label)
      form.append(input)
      form.append(button)
      container.innerHTML = ""
      h3.innerText = this.name
      container.append(h3)
      container.append(ul)
      for (let instrument of this.instruments) {
        let btn2 = document.createElement("button")
        let ele = document.createElement("li")
        ele.id = instrument.id
        ele.innerText = instrument.content     
        btn2.innerText = "delete" 
        ul.append(ele)
        document.getElementById(instrument.id).append(btn2) 
        btn2.addEventListener('click', instrument.deleteInstrument.bind(instrument))
      }
      container.append(form)
      form.addEventListener('submit', this.submitInstrument.bind(this))
    }

    
    async submitInstrument(){
      event.preventDefault()
      let content = document.getElementById("content").value
      let orchestra_id = this.id
      let instrument = {instrument: {content, orchestra_id}}
      let options = {
        method: "POST",
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify(instrument)
      }
  
      document.getElementById("content").value = ""
      try {
        let response = await fetch("http://localhost:3000/instruments", options)
        let instrument = await response.json()
          if (instrument.data) {
            let newInstrument = new Instrument(instrument.data)
            let orchestra = Orchestra.allOrchestras.find(orchestra => parseInt(orchestra.id) === newInstrument.orchestraId)
            let ul = document.querySelector("ul")
            orchestra.instruments.push(newInstrument)
            ul.innerHTML += newInstrument.instrumentHTML()
          } else {
            throw new Error(instrument.message)
          }
      } catch(err) {
        alert(err)
      }
  
    }
  
    static renderOrchestras() {
      for (let orchestra of this.allOrchestras) {
        orchestra.renderOrchestra()
      }
    }
  
    static fetchOrchestras() {
      fetch("http://localhost:3000/orchestras")
      .then(r => r.json())
      .then(orchestras => {
        if (orchestras.data) {
          for (let orchestra of orchestras.data) {
            let newOrchestra = new Orchestra(orchestra)
          }
          this.renderOrchestras()
        } else {
          throw new Error(orchestras.data)
        }
  
      }).catch(err => alert(err))
    }
  
    static createOrchestra() {
      event.preventDefault()
      const name = document.getElementById('orchestraName').value
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({orchestra: {name: name}})
      }
  
      document.getElementById('orchestraName').value = ""
  
      fetch("http://localhost:3000/orchestras", options)
      .then(r => r.json())
      .then(orchestraObj => {
        if (orchestraObj.data) {
          let newOrchestra = new Orchestra(orchestraObj.data)
          newOrchestra.renderOrchestra()
        } else {
          throw new Error(orchestraObj.message)
        }
  
      }).catch((err) => alert(err))
    }
  
    async deleteOrchestra() { 
      let removeOrchestra = document.getElementById(this.id)
         removeOrchestra.remove()
      try {
      const response = await fetch(`http://localhost:3000/orchestras/${this.id}`, { 
          method: 'DELETE', 
          headers: { 
              'Content-type': 'application/json'
          } 
      })
      //name instead?

    }catch(error){
      alert(error)
    }
  } 

  }
  