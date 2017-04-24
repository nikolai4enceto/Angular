import { Component } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './car.component.html',
})
export class CarComponent  { 
 
 
  car:car;
  data:any;
  edit:boolean;
  id:number;
  constructor(){
    this.hobbies = ["Music", "Movies", "Sports"];
    this.showHobbies = false;
    this.car ={
        brand:"",
        model:"",
        description:"",
        registration_number:"",
        fuelType:"",
        transmission:""
    }
}
toogleHobbies(){
    if(this.showHobbies==true){
        this.showHobbies=false;
    }
    else{
        this.showHobbies=true;
    }
}
addCar(){
    localStorage.setItem(localStorage.length+"",JSON.stringify(this.car))
    alert("Car was added");
    this.showCars();
}

showCars(){
    let data=[];
   for(let i = 0; i <localStorage.length;i++){
       data.push(JSON.parse(localStorage.getItem(i+"")))
   }
   this.data = data;
}
removeCar(index:number){
   this.data.splice(index,1);
}
saveChanges(){
    let save = confirm("Save changes");
    if(save){
        localStorage.clear();
        for(let i=0; i<this.data.length;i++){
            localStorage.setItem(i+"",JSON.stringify(this.data[i]))    
        }
    }
    else{
        this.showCars();
    }

}
editCar(index:number){
    this.id=index;
    this.edit = true;
    let carToEdit = this.data[index];
    this.car.brand = carToEdit.brand;
    this.car.model = carToEdit.model;
    this.car.description = carToEdit.description;
    this.car.registration_number = carToEdit.registration_number;
    this.car.fuelType = carToEdit.fuelType;
    this.car.transmission = carToEdit.transmission;
}
saveEdit(){
    localStorage.setItem(this.id+"",JSON.stringify(this.car))
    this.showCars();
    this.edit = false;
}
}
interface car{
    brand:string;
    model:string;
    description:string;
    registration_number:string;
    fuelType:string;
    transmission:string;
}