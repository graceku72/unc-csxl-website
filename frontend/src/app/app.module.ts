import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { StatsComponent } from './stats/stats.component';

import { NavbarComponent } from './navbar/navbar.component';

import { CheckinComponent } from './checkin/checkin.component';
import { CheckinConfirmationComponent } from './checkin-confirmation/checkin-confirmation.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    ConfirmationComponent,
    StatsComponent,

    NavbarComponent,

    CheckinComponent,
    CheckinConfirmationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'register', component: RegistrationComponent},
      {path: 'confirmation', component: ConfirmationComponent},
      {path: 'stats', component: StatsComponent},
      {path: 'checkin', component: CheckinComponent},
      {path: 'checkin-confirmation', component: CheckinConfirmationComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
