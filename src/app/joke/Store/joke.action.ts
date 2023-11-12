import {createAction, props} from "@ngrx/store";
import {JokeState} from "./joke.state";

export const displayJoke = createAction('Display Joke');
export const fetchAndDisplayJoke = createAction('Fetch And Display Joke', props<{data:JokeState}>())


export const saveJoke = createAction('Save Joke', props<{jokes:any}>());
