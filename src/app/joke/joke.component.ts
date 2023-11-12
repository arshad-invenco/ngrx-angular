import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {JokeState} from "./Store/joke.state";
import {displayJoke, fetchAndDisplayJoke, saveJoke} from "./Store/joke.action";

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  url:string = 'https://official-joke-api.appspot.com/random_joke';

  data: any;

  jokes: JokeState;

  savedJokes: any[];

  constructor(private http: HttpClient, private store:Store<{joker: JokeState}>){
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((joke)=>{
      this.data = joke
    })
    this.store.select('joker').subscribe((joke)=>{
        this.jokes = joke
    })
      this.store.select('joker').subscribe((joke)=>{
        this.savedJokes = joke.savedJoke;
      })
  }

  onDisplayJoke() {
    this.store.dispatch(displayJoke());
  }

  generateNewJoke() {
    this.http.get(this.url).subscribe((data:JokeState)=>{
      this.store.dispatch(fetchAndDisplayJoke({data}));

    })
  }

    saveJoke() {
      this.store.dispatch(saveJoke({
          jokes:{
            id:this.jokes.id,
            setup:this.jokes.setup,
            punchline: this.jokes.punchline,
            type: this.jokes.type
          }
      }))
        console.log(this.jokes)
    }
}
