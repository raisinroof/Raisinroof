
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Plandata } from './shared/plandata';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const plandatas = [
      {id: 11, role: true, name:'Calvin', age: 41, avatarColor:'#7bb241'},
      {id: 12, role: false, name:'Sybil', age: 5, avatarColor:'#7bb241'},
      {id: 13, role: true, name:'Arlene', age: 33, avatarColor:'#7bb241'},
      {id: 14, role: false, name:'Burt',  age: 2, avatarColor:'#7bb241'},
      {id: 15, role: true, name:'Grandpa', age: 61, avatarColor:'#7bb241'}
    ];
    return {plandatas};
  }

  // Overrides the genId method to ensure that a plandata always has an id.
  // If the plandatas array is empty,
  // the method below returns the initial number (11).
  // if the plandatas array is not empty, the method below returns the highest
  // plandata id + 1.
  genId(plandatas: Plandata[]): number {
    return plandatas.length > 0 ? Math.max(...plandatas.map(plandata => plandata.id)) + 1 : 11;
  }
}