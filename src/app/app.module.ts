import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ContactComponent } from './components/contact/contact.component';
import { FormControlErrorComponent } from './components/form-control-error/form-control-error.component';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SafePipe } from './pipes/safe.pipe';
import { ApiInterceptor } from './services/api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    FormControlErrorComponent,
    LoaderComponent,
    NotificationComponent,
    SafePipe
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
