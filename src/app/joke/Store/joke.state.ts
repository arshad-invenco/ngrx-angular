export interface JokeState{
  type:string,
  setup:string,
  punchline:string,
  id:number,
  savedJoke: JokeState[]
}

export const initialState: JokeState = {
    type : 'jhh',
    setup: 'djfj',
    punchline: 'sjj',
    id: 45,
    savedJoke: []
}
