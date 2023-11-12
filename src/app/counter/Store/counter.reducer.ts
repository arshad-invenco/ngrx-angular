import {createReducer, on} from "@ngrx/store";
import {initialState} from "./counter.state";
import {decrement, increment, reset} from "./counter.action";

export const counterReducer = createReducer(
  initialState,
  on(increment, (state)=>{
    return{
      ...state,
      count: state.count+1,
      data: [...state.data, 'arshad']
    };
  }),

  on(decrement, (state)=>{
    return{
      ...state,
      count: state.count-1,
      data: [...state.data, 'ansari']
    };
  }),

  on(reset, (state)=>{
    return{
      ...state,
      count: 0,
      data: []
    };
  }),
)

// export function counterReducer(state, action){
//   return _counterReducer(state, action);
// }


