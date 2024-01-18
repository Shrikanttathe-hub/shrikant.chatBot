import React from "react";

const initialState = {a:10, b:20, c:30}

function counterReducer=(state=initialState, action)

switch(action.type){
    case INCREASE: return state + action.value

    case DECREASE : return state -1;
    case REST: return  initialstate
}