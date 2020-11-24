class Instrument {

    static allInstruments = [] 

    constructor(instrument){
      this.content = instrument.attributes.content
      this.id = instrument.id
      this.orchestraId = instrument.attributes.orchestra_id
      Instrument.allInstruments.push(this)
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

    }catch(error){
      alert(error)
    }
  } 
  
   findInstrument(){
     allInstruments.filter//look up filter method
   }

 }