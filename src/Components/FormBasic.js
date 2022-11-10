import React from 'react';
import './FormCss.css';
import {FaUniversity,FaUserTie,FaUserGraduate}from 'react-icons/fa';
import {FaUserFriends,FaChalkboardTeacher}from 'react-icons/fa';
import { Link } from 'react-router-dom';


const FormBasic = () => {
  return (
    <div className='Basic_container'>
      <div className="Basic_main">
       <h2 className="basic_headline">
        <b>Registration As</b> 
       </h2>
       <div className="F_cards">
        <Link to="/univ_form">
        <div className="F_card1">
          <FaUniversity size={50}/>
          <p>University</p>
        </div>
        </Link>
        <Link to="/ITsoft_form">
        <div className="F_card2">
        <FaUserTie size={50}/>
          <p>IT Software</p>
        </div>
        </Link>
        <Link to="/fresher_form">
        <div className="F_card3">
        <FaUserGraduate size={50}/>
          <p>Fresher</p>
        </div>
        </Link>
        <Link to="/Channel_form">
        <div className="F_card4">
        <FaUserFriends size={50}/>
          <p>Channel Partner</p>
        </div>
        </Link>
        <Link to="/Trainer_form">
        <div className="F_card5">
        <FaChalkboardTeacher size={50}/>
          <p>Trainers</p>
        </div>
        </Link>
       </div>
      
      </div>
    </div>
  )
}

export default FormBasic
