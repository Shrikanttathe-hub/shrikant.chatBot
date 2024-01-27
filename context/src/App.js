import React from "react";
import Hello from './Components/Hello';
import Hii from "./Components/Hii";
import CricketProvider from "./Context/CricketProvider";

function App() {

  return (
    <div>
        <Hello />
      {/* <CricketProvider>
      <Hii />
      <Hello />
      </CricketProvider> */}
    </div>
  );
}

export default App;