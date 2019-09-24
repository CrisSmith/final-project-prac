//ACTIONS: "The dispatches"/"The letters"; This is where we willl ultimatetley make our request to the back end
//actions get called ("mailed") in the components (or containers) --> then they hit the reducers ("The Post Office") for sorting the state return

import {DELETE_ITEM, ITEMS_LOADING, FETCH_ITEMS, CREATE_ITEM} from './types';


export function setItemsLoading(){
    return{
        type: ITEMS_LOADING
    }
}
export function fetchItems(){
    return function(dispatch){
        fetch('/items')
        .then(res=>res.json())
        .then(data=> dispatch({
            type: FETCH_ITEMS,
            value: data
        }))
    }
}
export function createItem(item){
    return function(dispatch){
        fetch('/items',{
            method:'POST',
            headers:{'content-type':'application/json'},body: JSON.stringify(item)})
        .then(res=>res.json())
        .then(data=> dispatch({
            type: CREATE_ITEM,
            value: data
        }))
    }
}
export function deleteItem(id){
    return function(dispatch){
        fetch(`/items/${id}`)
        .then(res=>res.json())
        .then(_id=> dispatch({ 
            type: DELETE_ITEM,
            value: id
        }))
    }
}

//alternate fetch syntax:
/*export let fetchItems = () => dispatch =>{
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>
    dispatch({
        type:FETCH_ITEMS,
        value:data
    }))
}*/
//------------------------------------


/* actions with no fetch:

export function addItem(item){
    return{
        type: ADD_ITEM,
        value: item
    };
}
export function getItems(){
    return{
        type: GET_ITEMS
    };
}
export function deleteItem(id){
    return{
        type: DELETE_ITEM,
        value: id
    };
}
*/