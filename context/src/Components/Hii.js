import { useContext } from "react";
import cricketContext from "../Context/CricketContext";

const Hello = () => {

    // const name = useContext(cricketContext)
    const {cricketer, setCricketer} = useContext(cricketContext)

    //  console.log(obj) 

     // obj.cricketer.name

    return(
        <div>
            <h1>Welcome {cricketer.name}</h1>
            {/* <h2>Name is: {name}</h2> */}
       <hr/>
        </div>
    )
}

export default Hello;