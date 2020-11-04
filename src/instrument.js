class Instrument {

    constructor(instrument){
      this.content = instrument.attributes.content
      this.id = instrument.id
      this.orchestraId = instrument.attributes.orchestra_id
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
      }); 
      let instrument = await response.json()
       document.getElementById(this.id).remove
      
       
    }catch(error){
      alert(error)
    }
  } 
  
  }