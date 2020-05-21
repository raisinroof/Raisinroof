import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Subscription } from 'rxjs';

//import { Planevent } from '../shared/planevent.model';
//import { PlanEventService } from '../shared/planevent.service';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],

})
export class EventsComponent implements OnInit, OnDestroy {
//  planevents: Planevent[];
//  private subscription: Subscription;

//  constructor(private peService: PlanEventService) { }

  ngOnInit() {

 //   this.planevents = this.peService.getPlanevents();
 //   this.subscription = this.peService.planeventsChanged
 //   .subscribe(
 //     (planevents: Planevent[]) => {
 //       this.planevents = planevents;
 //     }
 //   );

  }

  onEditItem(index: number) {
  //  this.peService.startedEditing.next(index);
  }
  
  
  
  ngOnDestroy() {
  //  this.subscription.unsubscribe();
  
  
  }
  
  
  }