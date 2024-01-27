import { useContext } from "react";
import cricketContext from "../Context/CricketContext";

const Hello = () => {

    // const name = useContext(cricketContext)
    // const obj = useContext(cricketContext)
    const {cricketer,setCricketer} = useContext(cricketContext)
     
    // console.log(obj)

    function updateSachinAge(){
    setCricketer({...cricketer, age: cricketer.age+1})
    }

    // made by me reduce function
    function reduceSachinAge(){
        setCricketer({...cricketer, age: cricketer.age-1})
    }

    return(
        <div>
            {/* <h1>Welcome Cricketers</h1> */}
            <h1>Welcome {cricketer.name}</h1>
            <p>Age: {cricketer.age}</p>
            <p>Country: {cricketer.country}</p>
            <p>Retired: {cricketer.retired?"Yes":"No" }</p>
            {/* <h2>Name is: {name}</h2> */}
            <button onClick={updateSachinAge}>Update Sachin's age</button>
            <button onClick={reduceSachinAge}>Reduce Sachin's Age</button>
            <hr/>
        </div>
    )
}

export default Hello;