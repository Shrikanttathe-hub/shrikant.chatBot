import React,{useState} from 'react';
import axios from 'axios';

const FetchByAxio = () => {

    const [country, setCountry] = useState('');
    const [ resp, setResp ] = useState(null);
    const API_url = 'https://disease.sh/v3/covid-19/countries/';

   const getFetchByAxio = async (countryName) => {
    try{
      const response = await axios.get(`${API_url}${countryName}`);
      setResp(response.data);
    }catch(error){
      console.log(error.message);
    }
   };

   const handleSearch = () => {
    getFetchByAxio(country);
   }

  return (
    <>
       <div>
      <h1>Covid 19 cases</h1>
    </div>
    <div>
      <input type='text' value={country} placeholder='Enter Country Name' onChange={(e) => setCountry(e.target.value)}/>
      <br/>
      <br/>
      <button onClick={handleSearch}>Search</button>
    </div>
    {resp && (
    <div id='countryData'>
      <ul>
        <li>Country Name : {resp.country}</li>
        <li>Cases : {resp.cases}</li>
        <li>Death : {resp.deaths}</li>
        <li>Recovered : {resp.recovered}</li>
        <li>Today Cases :{resp.todayCases} </li>
      </ul>
    </div>
    )}
    </>
  );
};

export default FetchByAxio;
