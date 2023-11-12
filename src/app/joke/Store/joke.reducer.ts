import {createReducer, on} from "@ngrx/store";
import {initialState} from "./joke.state";
import {displayJoke, fetchAndDisplayJoke, saveJoke} from "./joke.action";


export const jokeReducer = createReducer(
  initialState,
  on(displayJoke, (state)=>{
      console.log("Inside DisplayJoke ");
    return{
      ...state,
      type: 'Arshad',
      setup: 'Joke Setup',
      punchline: 'Joke Punchline',
      id: 25
    }
  }),
  on(fetchAndDisplayJoke, (state, {data})=>{
      console.log("Inside Fetch And Display Joke");
    return{
      ...state,

        id: data.id,
        setup: data.setup,
        punchline: data.punchline,
        type: data.type
    }
  }),

    on(saveJoke, (state, {jokes})=>{
      return{
        ...state,
          savedJoke: [...state.savedJoke, jokes]
      }
    })

)
