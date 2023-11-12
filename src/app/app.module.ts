import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {counterReducer} from "./counter/Store/counter.reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {RouterModule, Routes} from "@angular/router";
import { CounterComponent } from './counter/counter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JokeComponent } from './joke/joke.component';
import {HttpClientModule} from "@angular/common/http";
import {jokeReducer} from "./joke/Store/joke.reducer";

const route: Routes = [
  {path:'', component: CounterComponent},
  {path:'counter', component: CounterComponent},
  {path:'joke', component: JokeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    NavbarComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({counter: counterReducer, joker: jokeReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    RouterModule.forRoot(route),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
