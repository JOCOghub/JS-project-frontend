class Instrument {

    constructor(instrument){
      this.content = instrument.attributes.content
      this.id = instrument.id
      this.orchestraId = instrument.attributes.orchestra_id
    }
  
    instrumentHTML() {
      return `<li id="${this.id}">${this.content}</li>`
    }
  
  
  }