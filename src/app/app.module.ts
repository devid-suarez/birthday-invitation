import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './view/components/clock/clock.component';
import { HomeComponent } from './home/home.component';
import { TreasureChestComponent } from './view/components/treasure-chest/treasure-chest.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    HomeComponent,
    TreasureChestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
