import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people : Person[] = 
  [
    {
      id: 1, 
      firstName: 'Helen', 
      lastName: 'Gregory', 
      dateOfBirth: new Date('10/16/1991')
    }, 
    {
      id: 2, 
      firstName: 'Sophie', 
      lastName: 'Smith', 
      dateOfBirth: new Date('1/15/2000')
    }, 
    {
      id: 3, 
      firstName: 'Anne', 
      lastName: 'Curtis', 
      dateOfBirth: new Date('02/05/1985')
    } 
  ];

  // This will return list of people
  getPeople(peopleList?: Person) : Observable<Person[]> {
    if( peopleList !== undefined ) {

      let peopleResults : Person[] = [];

      // Filter results by firstName and lastName
      for (let p of this.people) {
        if( peopleList.firstName.toLowerCase() === p.firstName.toLowerCase() ) {
          peopleResults.push(p);
        } else if( peopleList.lastName.toLowerCase() === p.lastName.toLowerCase() ) {
          peopleResults.push(p);
        }
      }

      return of(peopleResults);

    }

    return of(this.people);
  }

  constructor() { }
}
