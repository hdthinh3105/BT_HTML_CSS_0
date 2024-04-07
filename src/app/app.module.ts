import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bt1Component } from './bt-1/bt-1.component';
import {FormsModule} from "@angular/forms";
import { Vd1Component } from './vd-1/vd-1.component';
import { Bt3Component } from './bt-3/bt-3.component';
import { BtClass1Component } from './bt-class-1/bt-class-1.component';
import { BtClass2Component } from './bt-class-2/bt-class-2.component';
import {BtClass3AComponent} from "./bt-class-3-a/bt-class-3-a.component";
import {BtClass3BComponent} from "./bt-class-3-b/bt-class-3-b.component";
import {BtClass3CComponent} from "./bt-class-3-c/bt-class-3-c.component";

@NgModule({
  declarations: [
    AppComponent,
    Bt1Component,
    Vd1Component,
    Bt3Component,
    BtClass1Component,
    BtClass2Component,
    BtClass3AComponent,
    BtClass3BComponent,
    BtClass3CComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
