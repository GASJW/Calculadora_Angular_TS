import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent, MenuComponent, CalculadoraComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
