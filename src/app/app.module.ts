import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { SubComponent } from './power/sub/sub.component';


@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    SubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
