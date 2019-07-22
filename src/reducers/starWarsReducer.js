import {
  SUCCESS, 
  FAILURE, 
  FETCHING
} from  "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING: 
      return {
         ...state, 
         error: '', 
        fetching: true, 
         
      }
      
    case SUCCESS: 
    console.log(action.payload);
      return {
         ...state, 
        characters: action.payload, 
        fetching: false, 
       
      }
      
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FAILURE: 
    return {
       ...state, 
      fetching: false, 
      error: action.payload 
    }
    
    default:
      return state
  }
}
