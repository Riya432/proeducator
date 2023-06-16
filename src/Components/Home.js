// Home.js
import { Link } from 'react-router-dom';
import React from 'react';
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <>
    <center>
    <div>
      <i>
      <h1>Home Page</h1>
      <p>This is the home page content.</p>
      </i>
      <Button variant="contained" component={Link} to="/About">Go to About</Button>
    </div>
    </center>
    
    </>
    
  );
  
};

export default Home;
