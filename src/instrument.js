class Instrument {

    static allInstruments = [] 

    constructor(instrument){
      this.content = instrument.attributes.content
      this.id = instrument.id
      this.orchestraId = instrument.attributes.orchestra_id
      Instrument.allInstruments.push(this.content)
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
  
   static findInstrument(){
     event.preventDefault();
     console.log('works')
     let name = document.getElementById('orchestraName').value
     let instrument = Instrument.allInstruments.find(instrument => instrument.content == name)//filter or find?
      console.log(Instrument.allInstruments)
       if (instrument){
         container.innerHTML = ""
         console.log(instrument.orchestra)
         container.innerHTML += `<li> The instrument you searched for is in the ${this.orchestra} concert.</li>`
       } else {
         alert('Instrument not found')
       }
         document.getElementById('instrumentName').value = ""
   }

 }