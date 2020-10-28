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
      let pgh = document.createElement("p")
      pgh.id = this.id
      pgh.innerText = this.name
      pgh.addEventListener('click', this.showOrchestra.bind(this))
      div.append(pgh)
    }
  
  
    showOrchestra() {
      let container = document.getElementById('container')
      let h3 = document.createElement('h3')
      let ul = document.createElement("ul")
      let form = document.createElement("form")
      let label = document.createElement("label")
      let input = document.createElement('input')
      let btn = document.createElement("input")
      btn.type = "submit"
      btn.innerText = "Submit"
      input.id = "content"
      label.innerText = "Content:"
      form.id = "instrumentForm"
      ul.id = "orchestraUl"
      form.append(label)
      form.append(input)
      form.append(btn)
      container.innerHTML = ""
      h3.innerText = this.name
      container.append(h3)
      container.append(ul)
      for (let instrument of this.instruments) {
        ul.innerHTML += instrument.instrumentHTML()
      }
      container.append(form)
      form.addEventListener('submit', this.submitInstrument.bind(this))
    }
  
    async submitInstrument(){
      event.preventDefault()
      let content = document.getElementById("content").value
      let orchestra_id = this.id
      let instrument = {instrument: {content, orchestra_id}} // destructuring lines 52/53 -> keys and variable names must match
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
  
    // generateOrchestraHTML() {
    //   return `<p id="${this.id}">${this.name}</p>`
    // }
  
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
  
  
  }
  