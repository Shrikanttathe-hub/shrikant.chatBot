import logo from './logo.svg';
import './App.css';
import './style.css'
import React,{useEffect, useState} from 'react';
import FetchingData from './Components/FetchingData';
import SearchBar from './Components/SearchBar';

function App() {
  const[FetchData,setFetchingData] = useState([])
  const [isNotEmpty, setIsNotEmpty] = useState(false);
  useEffect(() => {
    setIsNotEmpty(true)
    console.log(FetchingData);
  }
  ,[FetchData])
  return (
    <div >
      
       <SearchBar
       setFetchingData={setFetchingData}
       isNotEmpty={isNotEmpty}
       setIsNotEmpty={setIsNotEmpty}
       FetchingData={FetchingData}
     />
    </div>
  );
}

export default App;
