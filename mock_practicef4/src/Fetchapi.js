import React,{useState, useEffect} from 'react'

const Fetchapi = () => {
 
  const[country , setCountry] = useState("");
  const [ resp, setResp] = useState([]);

  useEffect(() => {
    fetch(`http://disease.sh/v3/covid-19/india`)
    .then((response) => response.json())
    .then((data) => setResp(data))
    .catch((err) => {
      console.log(err.message);
    });
  }, []);

  function output() {
    fetch(`http://disease.sh/v3/covid-19/countries/${country}`)
    .then((response) => response.json())
    .then((data) => setResp(data));

  }
 
 
 
 
  return (
    <>
    <div>
      <h1>Covid 19 cases</h1>
    </div>
    <div>
      <input type='text' placeholder='Enter Country Name' onChange={(e) => setCountry(e.target.value)}/>
      <br/>
      <br/>
      <button onClick={output}>Search</button>
    </div>
    <div id='countryData'>
      <ul>
        <li>Country Name : {resp.country}</li>
        <li>Cases : {resp.cases}</li>
        <li>Death : {resp.deaths}</li>
        <li>Recovered : {resp.recovered}</li>
        <li>Today Cases :{resp.todayCases} </li>
      </ul>
    </div>
    </>
  );
}

export default Fetchapi;