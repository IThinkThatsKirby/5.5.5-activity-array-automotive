//this includes the vehicle class as a module
const VehicleModule = require("./vehicle");


import {Vehicle} from ("./vehicleBaseClass");

class Car extends Vehicle{
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;

        }
    loadPassenger(num){
    if((this.passenger+num) <= this.maxPassengers){
    return this.passenger = this.passenger + num;
    } else {
        console.log(this.year + " " + this.model + " " + this.make + " no space for that many people dawg")
    }
}
    start(){
        if(this.fuel > 0){
            console.log("engine is started");
            return this.started = true;
        } else {
            console.log("engine wont start NO FUEL")
            return this.started = false;
        }
    }
    scheduleService(mileage){
        if(this.mileage > 30000){
            console.log("PLEASE SCHEDUYALE SEDRAVACE");
            return this.scheduleService = true;
        }
    }
}


//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
