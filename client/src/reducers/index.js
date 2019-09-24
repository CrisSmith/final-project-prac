import {combineReducers} from 'redux';
import {CREATE_ITEM, DELETE_ITEM, ITEMS_LOADING, FETCH_ITEMS} from '../actions/types';
import initialState from '../state'

 
function currentItems(state = initialState, action){
    switch(action.type){    
        case ITEMS_LOADING:
            return{
                ...state,
                loading: true
            };
        case FETCH_ITEMS:
            return{
                ...state,
                items: action.value,
                loading:false
            };
        case CREATE_ITEM:
            return{
                ...state,
                items: [...state.items, action.value]
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item=> item._id !== action.value)
            };
        default:
            return state;
    }
}




export default combineReducers({
    currentItems

})