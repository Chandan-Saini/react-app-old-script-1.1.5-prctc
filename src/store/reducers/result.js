import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})  //way to shallow copy arrays
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];       //way 2 to shallow copy arrays
            // newArray.splice(id, 1)                    //way to delete the element from array
            const updatedArray = state.results.filter(result => result.id !== action.resultElId); //way to delete element from array without effecting original array, as filter returns new array when condition satisfies 
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
};

export default reducer;