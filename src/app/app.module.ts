import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaComponent } from './compa/compa.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule} from "@angular/material/list";
import { MatButtonModule} from "@angular/material/button";
import { MatIconModule} from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [AppComponent, CompaComponent, CalculadoraComponent],
  imports: [BrowserModule, 
    AppRoutingModule, 
    BrowserModule, 
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
