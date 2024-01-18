import React from "react";
// getstate
// dispatch

import { useSelector,useDispatch } from "react-redux";
import {increase, decrease, reset} from '../redux/actions/counterActions';
const CounterApp = () => {
    

    const count = useSelector((state)=>console.log(state))

    const dispatch = useDispatch()

    return(
        <div>
           // <h1>{count}</h1>
            <button onClick={()=>dispatch(increase())}>Increase</button>
            <button onClick={()=>dispatch(decrease())}>Decrease</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    ) 
}

export default CounterApp;