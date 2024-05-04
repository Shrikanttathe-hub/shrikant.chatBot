
import React,{useState} from 'react';

const PhoneBook = () => {
  
const [userName, setUserName] = useState("");
const [number, setNumber] = useState("");
const [showData, setShowData] = useState("");

  
    return (
    <div>
      <div>
        <h1>PhoneBook</h1>
        <label htmlFor='name' >Enter Name:</label>
        <input type='text' placeholder='Add Name' value={userName}  onChange={(e) => setUserName(e.target.value)}/><br/><br/>
        <label htmlFor='number'>Enter phone Number:</label>
        <input type='number' value={number} placeholder='Add Number' onChange={(e) => setNumber(e.target.value)}/><br/><br/>
        <button className='Add-btn' type='submit' onClick={handkleclick}>Add Contact</button>

        <h2>My Contacts</h2>

      </div>
    </div>
  )
}

export default PhoneBook;
