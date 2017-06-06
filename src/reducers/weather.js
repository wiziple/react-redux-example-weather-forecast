import { FEATCH_WEATHER } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case FEATCH_WEATHER:
      // return state.push(action.payload.data); // Do not mutate data
      // return state.concat([action.payload.data]); // use ES6 instead
      return [ action.payload.data, ...state ]; // always return new instance
  }

  return state;
}