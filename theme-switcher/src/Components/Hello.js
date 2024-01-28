import React, { useContext, useState,useEffect } from "react";
import styleContext from "../context/StyleContext";

const Hello = () => {

// const {theme, setTheme} = useContext(styleContext);
const {theme,lightTheme, darkTheme} = useContext(styleContext);
const [isDark, setIsDark] = useState(false);

useEffect(()=>{
    let currentTheme = localStorage.getItem("isDark");
    setIsDark(currentTheme=="true"?true:false);
    console.log(currentTheme, typeof(currentTheme))
    if(currentTheme == "false"){
         lightTheme();   
    }
    else{
        darkTheme();
    }
},[])

function SwitchTheme(){
    if(isDark == false){
        darkTheme();
    }
    else{
        lightTheme();
    }
    let currentTheme = !isDark;
    setIsDark(currentTheme);
    localStorage.setItem("isDark", currentTheme);
}

    return(
        <div>
            <div style={theme}>
            {/* <div style={{
                color:theme.color,
                backgroundColor: theme.backgroundColor,
                border:theme.border
            }}> */}
                <h1>Hello</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptate atque harum, adipisci esse eos eveniet optio ex error aliquam quasi officia cumque sunt veritatis voluptatum! Eveniet quas minus quo voluptas placeat dolores incidunt nihil! Animi reiciendis aspernatur totam quam? Illo consectetur cupiditate ipsum provident ducimus ad at ex nobis!</p>
                <ol>
                    <li>one</li>
                    <li>Two</li>
                    <li>Three</li>
                </ol>
            </div>
            {/* <button onClick={
                ()=>setTheme({
                    color:"white",
                    backgroundColor:"black",
                    border:"2px solid green"
                })
            }>Switch Theme</button> */}

            <button onClick={SwitchTheme}>Switch Theme</button>
        </div>
    )
}

export default Hello;