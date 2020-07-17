import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ContactComponent } from './components/contact/contact.component';
import { FormControlErrorComponent } from './components/form-control-error/form-control-error.component';
import { HomeComponent } from './components/home/home.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent, FormControlErrorComponent, SafePipe],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
