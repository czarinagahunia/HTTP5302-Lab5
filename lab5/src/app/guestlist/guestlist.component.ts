import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.css']
})
// GuestlistComponent will run when initialized
export class GuestlistComponent implements OnInit {

  // Define 'guests' variable
  guests: Person[];

  // Undefined Person array
  // guests : Person[] = [];

  peopleSearch: Person = new Person();

  findPeople() {
    console.log("findPeople() clicked");
    this.peopleService.getPeople().subscribe(data => this.guests = data);
  }

  //  Declare a service inside a component 
  // using the component’s constructor.
  constructor(private peopleService: PeopleService){
  }

  ngOnInit() {
    this.peopleService.getPeople().subscribe(data => this.guests = data);
    //this.peopleSearch.firstName = "Czarina";
    this.findPeople();
  }

}
