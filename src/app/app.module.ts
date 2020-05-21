import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule }   from '@angular/forms';

import {CdkTableModule} from '@angular/cdk/table';

import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';


import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { PlanDataService } from './shared/plandata.service';
import { PlanEventService } from './shared/planevent.service';

import { HeaderComponent } from './header/header.component';
import { NavmainComponent } from './navmain/navmain.component';
import { PeopleComponent } from './people/people.component';
import { EventsComponent } from './events/events.component';
import { OutcomesComponent } from './outcomes/outcomes.component';
//import { EventsEditComponent } from './events/events-edit/events-edit.component';
//import { EventsListComponent } from './events/events-list/events-list.component';
import { PeopleHeadingComponent } from './people/people-heading/people-heading.component';
import { EventsHeadingComponent } from './events/events-heading/events-heading.component';
//import { PeopleuserTableComponent } from './people/peopleuser-table/peopleuser-table.component';
//import { EventsuserTableComponent } from './events/eventsuser-table/eventsuser-table.component';
//import { PeopleEditComponent } from './people/people-edit/people-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavmainComponent,
    PeopleComponent,
    EventsComponent,
    OutcomesComponent,
//    EventsEditComponent,
   
 //   EventsListComponent,
    PeopleHeadingComponent,
    EventsHeadingComponent,
//    PeopleuserTableComponent,
//    EventsuserTableComponent,
//    PeopleEditComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,

    CdkTableModule,

    MatButtonModule,
    MatRadioModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatTableModule,
    MatGridListModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatBottomSheetModule,
    MatSlideToggleModule,
    MatSliderModule,

    AvatarModule,
    HttpClientModule,
 
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  
  //entryComponents: [PeopleEditComponent],
  providers: [PlanDataService, PlanEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
