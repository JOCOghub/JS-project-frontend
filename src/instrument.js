class Instrument {

  static allInstruments = [] 

  constructor(instrument){
    this.content = instrument.attributes.content
    this.id = instrument.id
    this.orchestraId = instrument.attributes.orchestra_id
    Instrument.allInstruments.push(this) // counsider pushing entire object with its id so you can ref the instruments orchestras
  }
  
  instrumentHTML() {
    return `<li id="${this.id}">${this.content}</li>`
  }
  
  async deleteInstrument() { 
    try {
      const response = await fetch(`http://localhost:3000/instruments/${this.id}`, { 
        method: 'DELETE', 
        headers: { 
          'Content-type': 'application/json'
        } 
      })
     let removeInstrument = document.getElementById(this.id)
      removeInstrument.remove(this.content)

    } catch(error) {
      alert(error)
    }
  } 
  
  static findInstrument() {
    event.preventDefault();
    let name = document.getElementById('instrumentName').value 
    let found = Instrument.allInstruments.find(instrument => instrument.content == name)
    if (found){
      container.innerHTML = ""
      let orcId = found.orchestraId
      let orchestraName = Orchestra.allOrchestras.find(orchestra => orchestra.id == orcId)
      container.innerHTML += `<li> The instrument you searched for is in the ${orchestraName.name} concert.</li>`
    } else {
      alert('Instrument not found')
    }
  }
}