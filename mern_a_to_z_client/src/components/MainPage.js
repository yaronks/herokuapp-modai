import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavBarMain from './NavBarMain';

function MainPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/books')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error');
      });
  }, []);

  return (
    <div className='MainPage'>
      <NavBarMain/> 
            <br />
            <h2 className='heading-text'>Modai</h2>
            <br />
            <h3 className='subheading-text'>Your Fashion Journey Begins Today</h3>
            <br />
            <br />
            <div className='link'> 
            </div>
    </div>
  );
}

export default MainPage;
