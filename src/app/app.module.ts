import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from
  '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//IMPORTS
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { PlayPageComponent } from './play-page/play-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent,
    HeaderComponent,
    FormComponent,
    PlayPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
