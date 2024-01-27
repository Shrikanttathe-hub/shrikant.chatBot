import React,{useState} from "react";
import cricketContext from "./CricketContext";


const CricketProvider = (props) => {

// let name = "Sachin Tendulkar"
const [cricketer, setCricketer] = useState({
       name:"Sachin Tendulakar",
       age:47,
       country:"India",
       retired:true

})



return(
    // <cricketContext.Provider value={name}>
    <cricketContext.Provider value={{
        cricketer: cricketer,
        setCricketer:setCricketer
    }}>
           {props.children}
    </cricketContext.Provider>

)

}

export default CricketProvider;