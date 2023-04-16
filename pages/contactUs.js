import Image from 'next/image';

// image
import location from '../public/location.svg'
import contact1 from '../public/contact1.jpg'
import contact2 from '../public/contact2.jpg'
import contact3 from '../public/contact3.jpg'

// mui
import { Box } from '@mui/system';
import {
    Button, TextareaAutosize,
    TextField, Typography, useMediaQuery
} from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactUs = () => {

    const isTablet = useMediaQuery('(max-width:900px)')

    return (
        <Box m='auto' maxWidth='1152px'>

            {/* Header */}
            <Box display='flex' alignItems='center'
                flexDirection={`${isTablet ? 'column' : 'row'}`}
                justifyContent='center' gap='50px' height='90vh'
            >
                <Box>
                    <Image src={location} alt='banner' width={600} height={400} />
                </Box>

                {/* Adress */}
                <Box width={`${isTablet ? '90%' : '50%'}`} pt={`${isTablet ? '0px' : '100px'}`}>

                    <Typography variant={`${isTablet ? 'h5' : 'h4'}`} component='h1' fontWeight={600} mb='30px'>
                        Visit one of our agency locations or contact us today
                    </Typography>

                    <Box display='flex' flexDirection='column' gap='20px'>
                        <Typography variant='body1' fontWeight={600} >
                            Head Office
                        </Typography>

                        <Typography variant='body2' component='h3' sx={{ color: 'gray' }}
                            display='flex' alignItems='center' gap='15px'
                        >
                            <MapIcon />
                            562 Wellington Road. Street32. San Francisco
                        </Typography>

                        <Typography variant='body2' component='h3' sx={{ color: 'gray' }}
                            display='flex' alignItems='center' gap='15px'
                        >
                            <EmailIcon />
                            Ecommerce@example.com
                        </Typography>

                        <Typography variant='body2' component='h3' sx={{ color: 'gray' }}
                            display='flex' alignItems='center' gap='15px'
                        >
                            <PhoneIcon />
                            +01 2222 345 / (+91) 01 2345 6789
                        </Typography>

                        <Typography variant='body2' component='h3' sx={{ color: 'gray' }}
                            display='flex' alignItems='center' gap='15px'
                        >
                            <AccessTimeIcon />
                            10:00 - 18:00. Mon-Sat
                        </Typography>
                    </Box>

                </Box>
            </Box>

            {/* Msg Form */}
            <Box border='1px solid gray' p={`${isTablet ? '20px' : '40px'}`} flexDirection={`${isTablet ? 'column' : 'row'}`}
                display='flex' gap={`${isTablet ? '50px' : '14px'}`} justifyContent='center'
            >

                {/* Form */}
                <Box component='form' gap='20px' width={`${isTablet ? '100%' : '70%'}`}
                    display='flex' flexDirection='column'
                >

                    <Typography variant='body2' sx={{ color: 'gray' }}>
                        LEAVE A MESSAGE
                    </Typography>

                    <Typography variant='h5' fontWeight={600}>
                        We love to hear from you
                    </Typography>

                    <TextField
                        id="Name"
                        label="Your Name"
                        type="text"
                    />
                    <TextField
                        id="Email"
                        label="E-mail"
                        type="email"
                    />
                    <TextField
                        id="Subject"
                        label="Subject"
                        type="text"
                    />

                    <TextareaAutosize
                        aria-label="Your Message"
                        placeholder="Your Message"
                        style={{ height: '200px', resize: 'none' }}
                    />

                    <Button variant='contained' color='success' >
                        Send
                    </Button>
                </Box>

                {/* peoples */}
                <Box display='flex' width={`${isTablet ? '100%' : '30%'}`}
                    alignItems='center' flexDirection='column' gap='15px' justifyContent='flex-start'>

                    <Box display='flex' gap='10px'>
                        <Box>
                            <Image src={contact1} alt='person' width='80px' height='75px' style={{ borderRadius: '50%' }} />
                        </Box>
                        <Box>
                            <Typography variant='body1' fontWeight={600}>
                                John Doe
                            </Typography>
                            <Typography variant='body2' sx={{ color: 'gray', fontSize: '12px' }}>
                                Senior Marketing Manager
                            </Typography>
                            <Typography variant='body2' sx={{ color: 'gray', fontSize: '12px' }}>
                                Phone: + 000 123 000 77 88
                            </Typography>
                            <Typography variant='body2' sx={{ color: 'gray', fontSize: '12px' }}>
                                Email: contact@example.com
                            </Typography>
                        </Box>
                    </Box>

                    <Box display='flex' gap='10px'>
                        <Box>
                            <Image src={contact2} alt='person' width='75px' height='75px' style={{ borderRadius: '50%' }} />
                        </Box>
                        <Box>
                            <Typography variant='body1' fontWeight={600}>
                                William Smith
                            </Typography>
                            <Typography variant='body2' sx={{ color: 'gray', fontSize: '12px' }}>
                                Senior Marketing Manager
                            </Typography>
                            <Typography variant='body2' sx={{ color: 'gray', fontSize: '12px' }}>
                                Phone: + 000 123 000 77 88
                            </Typography>
                            <Typography variant='body2' sx={{ color: 'gray', fontSize: '12px' }}>
                                Email: contact@example.com
                            </Typography>
                        </Box>
                    </Box>

                    <Box display='flex' gap='10px'>
                        <Box>
                            <Image src={contact3} alt='person' width='85px' height='75px' style={{ borderRadius: '50%' }} />
                        </Box>
                        <Box>
                            <Typography variant='body1' fontWeight={600}>
                                Emma Stone
                            </Typography>
                            <Typography variant='body2' sx={{ color: 'gray', fontSize: '12px' }}>
                                Senior Marketing Manager
                            </Typography>
                            <Typography variant='body2' sx={{ color: 'gray', fontSize: '12px' }}>
                                Phone: + 000 123 000 77 88
                            </Typography>
                            <Typography variant='body2' sx={{ color: 'gray', fontSize: '12px' }}>
                                Email: contact@example.com
                            </Typography>
                        </Box>
                    </Box>

                </Box>

            </Box>

        </Box>
    );
}

export default ContactUs;