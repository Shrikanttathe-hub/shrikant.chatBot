// question no.1 Fetch API
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function GetSort() {
  // to create api variable
  const APIURL = "https://jsonplaceholder.typicode.com/users";
  
  // declare variable for users and order
  const [users, setUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState(0);
  
  // function for getUsers
 const getUsers = () => {
  return fetch(APIURL)
  .then((response)=> response.json())
  .then((data)=> setUsers(data));
 }

  // function for sortList and condition
 const sortList = ()=> {
  if(sortOrder === 0 || sortOrder === 2){
    setUsers([...users].sort((a, b) => a.name.length - b.name.length));
    setSortOrder(2);
  }else if(sortOrder === 1){
    setUsers([...users].sort((a, b) => b.name.length - a.name.length));
    setSortOrder(1);
  }
 }
  
   return (
   <div className ="App">
    <h1>User list</h1>
    <div>
      <button onClick={getUsers}>Get User</button>
      <button onClick={sortList}>Sort List</button>
    </div>
    <ul>
       {users.map((user) =>(
        <li key={user.id}>{user.name}</li>
       ))}{""}
    </ul>
   </div>
  );
}

export default GetSort;
