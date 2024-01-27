import React, { useState, useEffect } from "react";
import "../Styles/Profile.css";
import ProfileSVG from "../Components/Assets/userlogo.svg";

const Profile = ({userDetails,setUserDetails}) => {

    useEffect(() => {
        // Fetch user details from local storage when the component mounts
        const storedUser = JSON.parse(localStorage.getItem('user Data'));
        if (storedUser) {
          setUserDetails(storedUser);
        }
      }, []);

    const handleLogout = () => {
        // Clear user data from local storage on logout
        localStorage.removeItem('user Data');
        window.location.href = '/';
      };

  return (
    <div className="App1">
      <div className="design">
        <div className="triangle-design"></div>
      </div>
      <h1 id="header">Signup Successful!</h1>
      <div className="form">
        <h1>Profile</h1>
        <img src={ProfileSVG} alt="Profile Image" />
        <div className="details">
          <p>User ID: {userDetails.id}</p>
          <p>Full Name: {userDetails.firstName + " " + userDetails.lastName}</p>
          <p>Email: {userDetails.email}</p>
        </div>
        <button className="logout-button" onClick={handleLogout}>LOGOUT</button>
      </div>
    </div>
  );
};

export default Profile;