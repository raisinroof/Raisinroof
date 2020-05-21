import { Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';

interface User {
  first?: string;
  last?: string;
  fullName?: string;
  role?: boolean;
  avatarColor?: string;
}
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
 
})
export class PeopleComponent  implements OnInit{
  
  

  avatarSize = 60;
  avatarSizeBig = this.avatarSize + 15;
  panelOpenState = false;
  calcCollapsedHeight: string = (this.avatarSizeBig.toString()) + "px";
  form: FormGroup;
  formsArray = [];
  newUser: User;
  response: User[] = [
    { first: "Bob", last: "Robinson", fullName: "Bob Robinson", role: true, avatarColor:'#AA00FF'},
    { first: "Bill", last: "Gates", fullName: "Bill Gates" , role: false, avatarColor:'#AA00FF'},
    { first: "Tom", last: "Smith", fullName: "Tom Smith", role: true, avatarColor:'#64DD17' }
  ]; // endpoint

constructor()  { 
  this.newUser = {};
  this.createForms();
}

ngOnInit() { 

}

// build array of users
createForms() {
  for (let i = 0; i < this.response.length; i++) {
    this.formsArray.push(
      new FormGroup({
        first: new FormControl(this.response[i].first),
        last: new FormControl(this.response[i].last),
        fullName: new FormControl(this.response[i].fullName),
        role: new FormControl(this.response[i].role),
        avatarColor: new FormControl(this.response[i].avatarColor)
      })
    );
  }
  
  console.log(this.formsArray);
}

addNewUser() {
  console.log(this.newUser);
  if (this.newUser.first !== null) {
   
    this.newUser.fullName = `${"?"} ${"?"}`;
    this.newUser.avatarColor = '#9E9E9E';
    this.response.unshift(this.newUser);
    console.log(this.response);
    this.formsArray.length = 0;
    this.createForms();
    this.newUser = { first: "", last: null, fullName: null, role: true, avatarColor: null };
  }
}

save(index) {
  this.response[index].fullName = `${this.formsArray[index].value.first} ${
    this.formsArray[index].value.last
  }`;
  this.panelOpenState = false;
  console.log(this.panelOpenState)
}

delete(index) {
  this.formsArray.splice(index, 1);
  this.response.splice(index, 1);
  this.panelOpenState = false;
 
  console.log(this.formsArray);
}
}


