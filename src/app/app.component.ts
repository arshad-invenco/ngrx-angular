import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {decrement, increment, reset} from "./Store/counter.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx';
  count :number;

  constructor(private store: Store<{counter: {count : number}}>) {
    this.store.select('counter').subscribe((data)=>{
      this.count = data.count;
    })
  }


  increment(){
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement());
  }

  reset(){
    this.store.dispatch(reset());
  }
}
