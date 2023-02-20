import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <div className='ShowBookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>First Page</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/initial-survey'
              className='btn btn-outline-warning float-right'
            >
              Initial Survey
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'></div>
      </div>
    </div>
  );
}

export default MainPage;
