import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { EventsComponent } from './events/events.component';
import { OutcomesComponent } from './outcomes/outcomes.component';



const appRoutes: Routes = [ 
    {path: '', redirectTo: '/people', pathMatch: 'full'},
    {path: 'people', component: PeopleComponent},
 //   {path: 'events', component: EventsComponent},
 //   {path: 'outcomes', component: OutcomesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}