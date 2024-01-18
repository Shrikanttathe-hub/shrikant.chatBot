// action creator file
import { INCREASE, DECREASE, RESET } from "./actionTypes.js";


// actions 

//  {
//     type: INCREASE
//  }

// action creator are functions that return action objects

export function increase(value=1) {
    return {
        type: INCREASE,
        value: value
    }
}

export function decrease() {
    return {type: DECREASE}
}

export function reset() {
    return {type: RESET}
}