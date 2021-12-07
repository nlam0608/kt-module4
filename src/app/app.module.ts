import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './books/list/list.component';
import { CreateComponent } from './books/create/create.component';
import { UpdateComponent } from './books/update/update.component';
import { NavbavComponent } from './navbav/navbav.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DetailsComponent } from './books/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    UpdateComponent,
    NavbavComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
