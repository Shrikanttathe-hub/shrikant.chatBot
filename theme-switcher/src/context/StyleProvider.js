import React,{useState} from "react";
import styleContext from "./StyleContext";



const StyleProvider = (Props) => {

const [theme, setTheme] = useState({
    color: "red",
    backgroundColor: "white",
    border:"1px solid black"
})

    return (
         
        <styleContext.Provider value={
            {
                theme:theme, 
                lightTheme : ()=>setTheme({...theme, color:"red", backgroundColor:"white", border:"1px solid black"}),
                darkTheme : ()=>setTheme({...theme, color:"white", backgroundColor:"black", border:"2px solid green"}),
                }}>
                    
            {/* // {theme:theme,  */}
            {/* //  setTheme:setTheme
            //  }}> */}
            {Props.children}

        </styleContext.Provider>
    )
}

export default StyleProvider;