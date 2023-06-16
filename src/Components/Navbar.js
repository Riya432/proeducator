import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from './logo.png';

const Navbar = () => {
  return (
    <div style={{ backgroundColor:"#17bf9e",display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc' }}>
      

      {/* Login/Register and Cart buttons */}
      <div sx={{textsize:"50px",fontsize:"50px"}}>

      <Button component={Link} to="/" color="inherit" style={{ marginRight: '10px' }}>
         Home
        </Button>

        <Button component={Link} to="/Course" color="inherit" style={{ marginRight: '10px' }}>
         Course
        </Button>
      
        <Button component={Link} to="/FreeCourse" color="inherit" style={{ marginRight: '10px' }}>
         free Course
        </Button>
        <Button component={Link} to="/Testimonials" color="inherit" style={{ marginRight: '10px' }}>
         Our Students
        </Button>
        <Button component={Link} to="/ContactUs" color="inherit" style={{ marginRight: '10px' }}>
         ContactUS
        </Button>

        {/* <Button component={Link} to="/Contact" color="inherit" style={{ marginRight: '10px' }}>
         Contact
        </Button> */}

        <Button component={Link} to="/About" color="inherit" style={{ marginRight: '10px' }}>
         About US
        </Button>
{/* 
        <Button component={Link} to="/SignIn" color="inherit" style={{ marginRight: '10px' }}>
         SignIn
        </Button>

        <Button component={Link} to="/SignUp" color="inherit" style={{ marginRight: '10px' }}>
        SignUp
        </Button> */}

        <Button component={Link} to="/registration" color="inherit" style={{ marginRight: '10px' }}>
        Registration
        </Button>
      
        <Button component={Link} to="/Loginpage" color="inherit" style={{ marginRight: '10px' }}>
      Login
        </Button>
        {/* <Button variant="outlined" style={{ marginRight: '10px' }}>Cart
          <ShoppingCartOutlinedIcon />
        </Button> */}
      </div>
    </div>
  );
};

export default Navbar;
