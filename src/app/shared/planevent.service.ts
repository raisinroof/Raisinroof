import { Planevent }  from './planevent.model';
import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class PlanEventService {
    planeventsChanged = new Subject<Planevent[]>();
    startedEditing = new Subject<number>();
    private planevents: Planevent[] = [
        

    

        
    ];

    getPlanevents() {
        return this.planevents.slice();
    }

    getPlanevent(index: number) {
        return this.planevents[index];
      }
  
    addPlanevent(planevent: Planevent) {
        this.planevents.push(planevent);
        this.planeventsChanged.next(this.planevents.slice());
    }

    addPlanevents(planevents: Planevent[]) {
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }
        this.planevents.push(...planevents);
        this.planeventsChanged.next(this.planevents.slice());
      }

    updatePlanevent(index: number, newPlanevent: Planevent) {
        this.planevents[index] = newPlanevent;
        this.planeventsChanged.next(this.planevents.slice());
      }
    
    deletePlanevent(index: number) {
        this.planevents.splice(index, 1);
        this.planeventsChanged.next(this.planevents.slice());
      }

    }
