import { TeamService } from './team.service';
import { DriverService } from './driver.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { StandingComponent } from './standing/standing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreditsComponent } from './credits/credits.component';
import { MatTableModule } from '@angular/material'  
import { HttpClientModule } from '@angular/common/http';
import { TeamInfoPopUpComponent } from './list/team-info-pop-up/team-info-pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { DriverComponent } from './standing/driver/driver.component';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    StandingComponent,
    PageNotFoundComponent,
    CreditsComponent,
    TeamInfoPopUpComponent,
    DriverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  entryComponents: [
    TeamInfoPopUpComponent
  ],
  providers: [DriverService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }