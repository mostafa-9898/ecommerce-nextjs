import Image from 'next/image';
import Link from 'next/link';

// mui
import {
    Box, Button, Checkbox, FormControlLabel,
    TextField, Typography,
} from '@mui/material';

// formik
import { useFormik } from 'formik';
import * as Yup from 'yup'

// icons
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';

function RegisterPage() {

    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            accepted: false
        },

        validationSchema: Yup.object({
            name: Yup.string().required('Name is required!').max(15, 'Name must be less than 15 characters.'),
            lastName: Yup.string().required('lastName is required!').min(6, 'lastName must be more than 6 characters.'),
            email: Yup.string().required('Email is required!').email('Invalid email adress.'),
            password: Yup.string().required('Password is required!').min(8, 'Password must be more than 8 characters.'),
            confirmPassword: Yup.string().required('Confirm Password is required!').oneOf([Yup.ref('password'), ''], 'Password must match.'),
            accepted: Yup.bool().oneOf([true], 'You need to accept the terms and conditions'),
        }),
    })

    return (
        <Box sx={{
            maxWidth: '1576px', m: 'auto', px: { xs: "20px", xl: "50px" },
            display: 'flex', alignItems: 'center', pt: "30px",
            justifyContent: 'center', gap: '30px',
        }}>


            {/* Image */}
            <Box sx={{
                display: { xs: "none", xl: 'flex' },
                alignItems: 'center', justifyContent: "center",
            }}>
                <Image src="/pictures/Register.jpg" alt='banner'
                    width={600} height={750}
                    style={{ borderRadius: "10px" }}
                />
            </Box>


            {/* Register Form */}
            <Box sx={{
                width: { xs: "100%", md: "600px", xl: "500px" },
            }}>

                {/* title */}
                <Box sx={{
                    mb: "30px"
                }}>
                    <Typography variant="h5" component="h2" sx={{
                        fontWeight: "600", mb: "5px",
                        fontSize: { xs: "30px", md: "35px", xl: "40px" },
                    }}>
                        Create Account
                    </Typography>

                    <Typography variant="grayText" component="p" sx={{
                        fontSize: { xs: "12px", xl: "13px" },
                        fontWeight: "500",
                    }}>
                        Already have an account?
                        <Link href='/login'>
                            <a style={{ marginLeft: '5px', color: '#48cae4', }} >
                                Login
                            </a>
                        </Link>
                    </Typography>
                </Box>

                {/* form */}
                <form onSubmit={formik.handleSubmit}>

                    {/* name and lastName */}
                    <Box sx={{
                        display: "flex", flexDirection: { xs: "column", md: "row" },
                        alignItems: 'center', justifyContent: "space-between",
                        gap: { xs: "20px", md: "30px" }, mb: "10px"
                    }}>

                        {/* name */}
                        <Box sx={{
                            width: "100%",
                        }}>
                            <Typography variant='body1' sx={{
                                fontWeight: "600", mb: "3px",
                                fontSize: { xs: "13px", md: "15px" }
                            }}>
                                First Name
                            </Typography>
                            <TextField
                                fullWidth
                                size='small'
                                type='text'
                                name='name'
                                id='name'
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && formik.errors.name ? true : false}
                                helperText={formik.touched.name && formik.errors.name ?
                                    formik.errors.name : ""
                                }
                            />

                        </Box>

                        {/* lastName */}
                        <Box sx={{
                            width: "100%",
                        }}>
                            <Typography variant='body1' sx={{
                                fontWeight: "600", mb: "3px",
                                fontSize: { xs: "13px", md: "15px" }
                            }}>
                                Last Name
                            </Typography>
                            <TextField
                                fullWidth
                                size='small'
                                type='text'
                                name='lastName'
                                id='lastName'
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                error={formik.touched.lastName && formik.errors.lastName ? true : false}
                                helperText={formik.touched.lastName && formik.errors.lastName ?
                                    formik.errors.lastName : ""
                                }
                            />
                        </Box>
                    </Box>

                    {/* email */}
                    <Box sx={{
                        mb: "10px"
                    }}>
                        <Typography variant='body1' sx={{
                            fontWeight: "600", mb: "3px",
                            fontSize: { xs: "13px", md: "15px" }
                        }}>
                            Email
                        </Typography>
                        <TextField
                            fullWidth
                            size='small'
                            type='text'
                            name='email'
                            id='email'
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && formik.errors.email ? true : false}
                            helperText={formik.touched.email && formik.errors.email ?
                                formik.errors.email : ""
                            }
                        />
                    </Box>

                    {/* password */}
                    <Box sx={{
                        mb: "10px"
                    }}>
                        <Typography variant='body1' sx={{
                            fontWeight: "600", mb: "3px",
                            fontSize: { xs: "14px", md: "15px" }
                        }}>
                            Password
                        </Typography>
                        <TextField
                            fullWidth
                            size='small'
                            type='text'
                            name='password'
                            id='password'
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && formik.errors.password ? true : false}
                            helperText={formik.touched.password && formik.errors.password ?
                                formik.errors.password : ""
                            }
                        />
                    </Box>

                    {/* confirm password */}
                    <Box sx={{
                        mb: "10px"
                    }}>
                        <Typography variant='body1' sx={{
                            fontWeight: "600", mb: "3px",
                            fontSize: { xs: "14px", md: "15px" }
                        }}>
                            Confirm Password
                        </Typography>
                        <TextField
                            fullWidth
                            size='small'
                            type='text'
                            name='confirmPassword'
                            id='confirmPassword'
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            error={formik.touched.confirmPassword && formik.errors.confirmPassword ? true : false}
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword ?
                                formik.errors.confirmPassword : ""
                            }
                        />
                    </Box>

                    {/* checkbox */}
                    <Box sx={{
                        mb: "10px"
                    }}>
                        <FormControlLabel
                            label="I accept term of privacy policy"
                            control={
                                <Checkbox color='button'
                                    name='accepted'
                                    id='accepted'
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.accepted}
                                />
                            }
                        />
                        {formik.touched.accepted && formik.errors.accepted ?
                            <span style={{
                                fontSize: '12px', paddingLeft: '15px',
                                color: '#d32f2f', display: "block",
                                marginTop: "0px", marginBottom: '25px',
                            }}>{formik.errors.accepted}</span>
                            : null
                        }
                    </Box>

                    {/* submit button */}
                    <Button
                        variant='contained'
                        type='submit'
                        color='button'
                        fullWidth
                        sx={{ height: "45px", }}
                    >
                        <Typography variant='subtitle1' sx={{
                            color: 'white', fontWeight: "600",
                            fontSize: { xs: "13px", xl: "14px" },
                        }}>
                            Register
                        </Typography>
                    </Button>

                    {/* OR */}
                    <Typography variant='subtitle1' sx={{
                        fontSize: { xs: "12px", xl: "14px" },
                        textAlign: "center", my: "20px",
                    }}>
                        OR
                    </Typography>

                    {/* Register with google and facebook */}
                    <Box sx={{
                        display: "flex", alignItems: "center",
                        justifyContent: "space-between", gap: { xs: "15px" },
                        flexDirection: { xs: "column", md: "row" }
                    }}>

                        {/* google */}
                        <Button variant='outlined' sx={{
                            height: "45px", width: { xs: "100%", md: "280px", xl: "240px" }
                        }}>
                            <FcGoogle size={25} />
                            <Typography variant='subtitle1' sx={{
                                ml: "7px", fontWeight: "600",
                                fontSize: { xs: "12px", md: "12px" },
                            }}>
                                Sign up with Google
                            </Typography>
                        </Button>

                        {/* facebook */}
                        <Button variant='outlined' sx={{
                            height: "45px", width: { xs: "100%", md: "280px", xl: "240px" }
                        }}>
                            <FaFacebookSquare size={25} style={{ color: "#0077b6" }} />
                            <Typography variant='subtitle1' sx={{
                                ml: "7px", fontWeight: "600",
                                fontSize: { xs: "12px", md: "12px" },
                            }}>
                                Sign up with Facebook
                            </Typography>
                        </Button>

                    </Box>

                </form>

            </Box>
        </Box>
    );
}

export default RegisterPage;