export interface CounterState {
  count: number;
  data: any[]; // This is where you define an array of any type
}

export const initialState: CounterState = {
  count: 0,
  data: [] // Initialize the array with an empty array or with some initial data
};
