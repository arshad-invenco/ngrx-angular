import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {CounterState} from "./Store/counter.state";
import {decrement, increment, reset} from "./Store/counter.action";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
// count : number;
  // array: any[];

  counter$  : Observable<{count: number, data: any[]}>;

  constructor(private store: Store<{counter: CounterState}>) {
    // this.store.select('counter').subscribe((data)=>{
    //   this.array = data.data;
    // })
    this.counter$ = this.store.select('counter');
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

  ngOnInit(): void {
  }
}
