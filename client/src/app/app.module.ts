import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeModule } from './home/home.module';
import { DonationModule } from './donation/donation.module';
import { ProfileModule } from './profile/profile.module';
import {MyUtilsModule} from './_utils/my-utils.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


import {AlertService} from './_services/alert.service';

import { appRoutes } from './app.routes';
import { apiInjectables } from './_injectables/api.injectables';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    HomeModule,
    DonationModule,
    ProfileModule,
    MyUtilsModule,
  ],
  providers: [
    apiInjectables,
    AlertService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
