 function car (MaximumSpeed = 200, delta = 5, limitSpeed = 100) {
    //private attribute
    let currentSpeed = 0
    

    //public method 
    this.speedUp = function () {
        if (currentSpeed + delta <= MaximumSpeed) {
            currentSpeed += delta
        } else {
            currentSpeed = MaximumSpeed
        }
    } 

    this.brake = function () {
        if (currentSpeed + delta >= limitSpeed) {
            currentSpeed -= delta
        } else {
            currentSpeed = limitSpeed
        }
    }
    
    //public method 
    this.getcurrentSpeed = function() {
        return currentSpeed
    }
}
 
const uno = new car
uno.speedUp()
uno.speedUp()
uno.brake()
console.log(uno.getcurrentSpeed())



