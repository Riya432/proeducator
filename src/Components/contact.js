import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Avatar, Popover } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
//import { Popover } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import { Password } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Row } from "reactstrap";




export const Contact = () => {
    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    //const Navigate = useNavigate();
    const [user, setUser] = useState([]);
    const currencies = [

        {
            value: 'ri',
            label: 'Select',
        }, {
            value: 'USD',
            label: 'User',
        },
        {
            value: 'EUR',
            label: 'Seller',
        },

    ];





    useEffect(() => {
        // axios.get("https://jsonplaceholder.typicode.com/posts")
        //     .then((res) => {
        //         console.log("User Detail:", res.data);
        //         setUser(res.data);
        //     });

    }, []);


    const validationSchema = Yup.object().shape({
        Firstname: Yup.string().min(3, "Please make sure you have entered you name with atleast 3 char.")
            .required("please enter your name"),
        email: Yup.string().email("Please enter a valid email address").required("please enter email address"),
        Password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        // confirmpassword: Yup.string()
        //     .required('Confirm Password is required')
        //     .oneOf([Yup.ref('password')], 'Passwords must match')
        
    });

    const initialValues = {
        Firstname: "",
        email: "",
        Lastname: "",
        Number:"",
        description:""
        // Password: "",
        // confirmpassword:""
    };

  
   
    const onFormSubmit = async (values) => {
        console.log("On the form submitted", values);

        const requestData = {
            userFirstName: values.Firstname,
            userLastName: values.Lastname,
            userEmail: values.email,
            userNumber:values.Number,
            userdescription:values.description,
            // userPassword: values.Password,
            // userconfirmpassword: values.confirmpassword,

        };
        //call API to post submit the form
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/posts",
                requestData);
            if (res.status === 201) {
                console.log(res.data.id);

                toast.success('API call is completted succesfully', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }

            axios.delete("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
                if (res.status === 200) {
                    toast.success('Data is deleted succesfully', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",

                    });
                }
            });

        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };



    //update=put
    const handleClick = (event) => {
        console.log(123);
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    return (
        <>

        <div
            style={{
                // padding: 5,
                display: "block",
                marginLeft:"550px",
            }}
        >
           
           
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    cursor: "pointer",
                }}
            >
                <div
                    onClick={handleClick}
                    style={{

                       
                        marginRight: 1400,
                        alignItems: "center",
                        columnGap: 5,

                    }}
                >
                    
                   

                </div>
            </div>
            <div
                style={{
                    padding: 5,
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 8,
                }}
            >
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onFormSubmit}>
                    {({ value, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
                        <form onSubmit={handleSubmit} >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginBottom: 5,
                                    width: 400,

                                }}
                            >
                              

                                <h1 style={{marginLeft:100}}>Register Page</h1>

                                
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    label="First Name"
                                    id="Firstname"
                                    name="Firstname"
                                    placeholder="First Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.Firstname && (
                                    <span
                                        style={{
                                            padding: 5,
                                            color: "red",
                                            fontSize: 16,
                                            fontWeight: 500,
                                        }}
                                    >
                                        {errors.Firstname}
                                    </span>
                                )}
                               
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginBottom: 5,
                                    width: 400,

                                }}
                            >
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    label="Last Name"
                                    id="Lastname"
                                    name="Lastname"
                                    placeholder="Last Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.Lastname && (
                                    <span
                                        style={{
                                            padding: 5,
                                            color: "red",
                                            fontSize: 16,
                                            fontWeight: 500,
                                        }}
                                    >
                                        {errors.Lastname}
                                    </span>
                                    
                                )}
                                
                            </div>
                            
                          
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginBottom: 5,
                                    width: 400,
                                }}
                            >
                                <TextField
                                    variant="outlined"
                                    type="email"
                                    label="email"
                                    id="email"
                                    name="email"
                                    placeholder="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.email && (
                                    <span
                                        style={{
                                            padding: 5,
                                            color: "red",
                                            fontSize: 16,
                                            fontWeight: 500,

                                        }}
                                    >
                                        {errors.email}
                                    </span>
                                )}
                            </div>

                            {/* <div

                            >
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    label="Roles"
                                    
                                    name="Role"
                                    placeholder="Role"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="Role"
                                    select
                                    defaultValue="ri"
                                    helperText="Please select your Role"
                                >

                                    {touched.Role && (
                                        <span
                                            style={{
                                                padding: 5,
                                                color: "red",
                                                fontSize: 16,
                                                fontWeight: 500,

                                            }}
                                        >
                                            {errors.Role}
                                        </span>
                                    )}
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div> */}

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginBottom: 5,
                                    width: 400,

                                }}
                            >
                                <TextField
                                    variant="outlined"
                                    type="Number"
                                    label="Mobile Number"
                                    id="Number"
                                    name="Number"
                                    placeholder="Number"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.Number && (
                                    <span
                                        style={{
                                            padding: 5,
                                            color: "red",
                                            fontSize: 16,
                                            fontWeight: 500,
                                        }}
                                    >
                                        {errors.Number}
                                    </span>
                                )}
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginBottom: 5,
                                    width: 400,

                                }}
                            >
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    label="description"
                                    id="description"
                                    name="description"
                                    placeholder="description"
                                    onChange={handleChange}
                                    //onChange={(e) => validate(e.target.value)}
                                    onBlur={handleBlur}
                                   
                                />
                               
                          
                                {touched.description && (
                                    <span
                                        style={{
                                            padding: 5,
                                            color: "red",
                                            fontSize: 16,
                                            fontWeight: 500,
                                            
                                        }}                                    >
                                        {errors.descriptiond}
                                    </span>
                                )}
                            </div>
                            <Button variant="contained" type="submit" className="" style={{width: 400,}}>
                                Submit
                            </Button>
                            {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <br></br>

                            <Button variant="contained" type="submit" className="" style={{width: 400,}}>
                                Submit
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item style={{marginRight:520}}>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid> */}
                        </form>
                    )}
                </Formik>
            </div>
            <div>
                {user.map((item) => (
                    <div key={item.id}>
                        <h3>item.title</h3>
                        <span>{item.body}</span>
                    </div>
                ))}
            </div>


        </div>
        </>
    );

};