import Image from 'next/image';
import Link from 'next/link';

// image
import loginImage from '../public/logIn.svg'

// mui
import {
    Box, Button,
    TextField, Typography, useMediaQuery
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

// formik
import { useFormik } from 'formik';
import * as Yup from 'yup'

const LogIn = () => {

    const isTablet = useMediaQuery('(max-width:900px)')

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            accepted: false
        },

        validationSchema: Yup.object({
            name: Yup.string().required('Name is Required!').max(15, 'Name must be less than 15 characters.'),
            email: Yup.string().required('Email is Required!').email('Invalid E-mail adress.'),
            password: Yup.string().required('Password is Required!').min(8, 'Password must be more than 8 characters.'),
            confirmPassword: Yup.string().required('Confirm Password is Required!').oneOf([Yup.ref('password'), ''], 'Password must match.'),
            accepted: Yup.bool().oneOf([true], 'You need to accept the terms and conditions'),
        }),
    })

    return (
        <Box maxWidth='1152px' m='auto'>

            <Box display='flex' alignItems='center'
                flexDirection={`${isTablet ? 'column' : 'row'}`}
                justifyContent='center' gap='50px'
            >

                {/* Image */}
                <Box display='flex' alignItems='center' justifyContent='center'>
                    <Image src={loginImage} alt='banner' width={500} height={650} />
                </Box>

                {/* Form */}
                <Box width={`${isTablet ? '97%' : '35%'}`} p='20px'
                    border='1px solid gray' borderRadius='10px'
                >

                    <Box mb='20px'>
                        <Typography variant='h5' component='h1' fontWeight={600} mb='10px'>
                            LogIn
                        </Typography>

                        <Typography variant='body2' component='h3'
                            sx={{ color: 'gray' }}>
                            Dont have account ?
                            <Link href='/signUp'>
                                <a style={{ marginLeft: '7px', color: '#48cae4', textDecoration: 'none' }} >
                                    Sign up
                                </a>
                            </Link>
                        </Typography>
                    </Box>

                    <form onSubmit={formik.handleSubmit}>

                        <Box mb='10px'>
                            <Typography variant='body1' fontWeight={600}>
                                E-mail:
                            </Typography>
                            <TextField fullWidth size='small'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                type='text'
                                name='email'
                                id='email'
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email ?
                                <p style={{
                                    backgroundColor: '#f42b03', borderRadius: '10px', fontSize: '13px',
                                    width: 'max-content', color: 'white', padding: '5px', margin: '0', marginTop: '5px'
                                }}>{formik.errors.email}</p>
                                : null
                            }
                        </Box>

                        <Box mb='10px'>
                            <Typography variant='body1' fontWeight={600}>
                                Password:
                            </Typography>
                            <TextField fullWidth size='small'
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                type='text'
                                name='password'
                                id='password'
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.password && formik.errors.password ?
                                <p style={{
                                    backgroundColor: '#f42b03', borderRadius: '10px', fontSize: '13px',
                                    width: 'max-content', color: 'white', padding: '5px', margin: '0', marginTop: '5px'
                                }}>{formik.errors.password}</p>
                                : null
                            }
                        </Box>


                        <Button sx={{ mb: '10px', py: '15px' }} variant='contained'
                            type='submit' color='productBtn' fullWidth>
                            <Typography variant='subtitle1' color='white'
                                fontSize={{ xs: "12px", md: "14px" }}>
                                Log in
                            </Typography>
                        </Button>

                    </form>

                    <Button variant='outlined' type='submit' color='productBtn'
                        fullWidth startIcon={<GoogleIcon />} sx={{ py: '15px' }}
                    >
                        <Typography variant='subtitle1'
                            fontSize={{ xs: "12px", md: "14px" }}>
                            Log in with Google
                        </Typography>
                    </Button>

                </Box>
            </Box>




        </Box>
    );
}

export default LogIn;