//Create an a class and extend it - Can be anything you would like it to be! 


//you can ALWAYS GO UP the prototype CHANGE
class Animal {
    constructon(name){
    this.name = name
    }
    speak() {
    console.log(`$this.name}  makes a sound`)
    
      }
    
    }
    
    class Dog extends Animal{
        constructon(name, breed){
       Super(name) = name
       this.breed = breed
        }
        speak() {
        console.log(`$this.name}  makes a sound`)
        
          }
        
        }
    
    class Cat extends Anilmal{
        constructon(name, breed){
       Super(name) = name
       this.breed = breed
        }
        speak() {
        console.log("MEOW")
        
          }
       
        }
        
        let alley = new Cat("Arnold", "mainCoon")