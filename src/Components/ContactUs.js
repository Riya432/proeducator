import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Container from '@mui/material/Container';
import { textAlign } from '@mui/system';
import { useState } from 'react';


import InputGroup from 'react-bootstrap/InputGroup';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
var Georgia = "Georgia";
var serif = "serif";

function GridComplexExample() {
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
    
    return (
        <>
   
            <style>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
            </style>


            <box sx={{ backgroundColor: "red" }}>



                <Box sx={{ fontfamily: Georgia, serif, backgroundColor: "white" }}>


                    <div>

                        <div sx={{ fontSize: "50px",textAlign:"center"}}>
                            <h1>Contact us</h1> <br />
                            
                        </div>
                    </div>

                    <Box sx={{ boxsizing: "border-box", padding: "60px", borderRadius: "40px", backgroundColor: "white", height: "500px", width: "1500px", marginLeft: "50px", marginBottom: "50px" }}>


                        <Box sx={{ marginLeft: "50px", boxsizing: "border-box", width: "500px", backgroundColor: "#17bf9e", padding: "50px", borderRadius: "10px", fontSize: "20px", position: "absolute", left: "100px" }}>

                            <h3 class="title">Get in touch</h3>

                            <ul class="ul contact-address-list">
                                <li class="single-address-item">
                                    <span class="icon-wrap color-01">
                                        <i class="fa-sharp fa-solid fa-location-dot icon"></i>
                                    </span>
                                    <span class="text">2972 Westheimer Rd. Santa Ana, Illinoi
                                        85486, India
                                    </span>
                                </li>
                                <li class="single-address-item">
                                    <span class="icon-wrap color-02">
                                        <i class="fa-solid fa-phone icon"></i>
                                    </span>
                                    <span class="text">(270) 555-0117


                                        (270) 589-7395
                                    </span>
                                </li>
                                <li class="single-address-item">
                                    <span class="icon-wrap color-03">
                                        <i class="fa-solid fa-envelope-open icon"></i>
                                    </span>
                                    <span class="text"><a href="https://themeim.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="a7c9c6d3cfc6c989d5c8c5c2d5d3d4e7c2dfc6cad7cbc289c4c8ca">[email&#160;protected]</a>
                                        <a href="https://themeim.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="157d7074717a73737c767055706d74786579703b767a78">[email&#160;protected]</a></span>
                                </li>
                            </ul>



                        </Box >


                        {/* form */}
                        <Box sx={{ position: "absolute", right: "100px", width: "700px" }}>

                            <Form  noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        {/* <Form.Label>First Name</Form.Label> */}
                           
                                        <Form.Control type="text" size="lg" placeholder="Enter First name" />
                                        <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridname">
                                        {/* <Form.Label>Last name</Form.Label> */}
                                        <Form.Control type="text" size="lg" placeholder="Enter Last name" />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
       
                                    </Form.Group>


                                </Row>

                                <Row className="mb-3">


                                    <Form.Group as={Col} controlId="formGridEmail">
                                        {/* <Form.Label>Email</Form.Label> */}
                                        <Form.Control type="email" size="lg" placeholder="Enter email" />
                                        <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridnumber">
                                        {/* <Form.Label>Phone Number</Form.Label> */}
                                        <Form.Control type="number" size="lg" placeholder="Enter Phone Number" />

                                        
                                    </Form.Group>

                                </Row>



                                <Row>


                                    <Form.Group as={Col} controlId="formGridnumber">
                                        {/* <Form.Label>Description</Form.Label> */}
                                        <Form.Control
                                            as="textarea"
                                            size='lg'
                                            placeholder="Description"
                                            style={{ height: '100px' }}
                                        />

                                        {/* <Form.Control type="email" size="lg" placeholder="Description" /> */}
                                    </Form.Group>



                                </Row>
                                <br />



                                <style type="text/css">
                                    {`
    .btn-flat {
      background-color: #8A2BE2;
     
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
                                </style>
                                <Button variant="flat" type="submit" size='xxl' color='purple'>
                                    Submit Message
                                </Button>

                            </Form>
                        </Box>

                    </Box>
                </Box>

            </box>


        </>



    );
}

export default GridComplexExample;


