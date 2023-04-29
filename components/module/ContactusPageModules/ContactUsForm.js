
// mui
import {
    Box,
    Button, TextareaAutosize,
    TextField, Typography,
} from '@mui/material';

// icon
import { HiLocationMarker } from 'react-icons/hi';
import {
    BsLinkedin, BsDribbble, BsPinterest,
    BsTwitter, BsFacebook, BsInstagram
} from 'react-icons/bs';


function ContactUsForm() {

    return (
        <Box sx={{
            mt: { xs: "50px", md: "70px" },
        }}>

            {/* title */}
            <Typography variant='h5' sx={{
                fontWeight: "600",
                fontSize: { xs: "22px", md: "32px" }, pb: "10px",
                borderBottom: "1px solid #6c757d",
                width: { xs: "280px", md: "420px" },
            }}>
                We love to hear from you
            </Typography>

            {/* content */}
            <Box sx={{
                display: "flex", flexDirection: { xs: "column", md: "row" },
                gap: { xs: "50px", md: "70px", xl: "100px" }, mt: "30px"
            }}>

                {/* form */}
                <Box component='form' sx={{
                    gap: '15px', width: { xs: "100%", md: "450px", xl: "600px" },
                    display: 'flex', flexDirection: 'column',
                }}>
                    <TextField
                        id="Name"
                        label="Name"
                        type="text"
                        size="small"
                        InputLabelProps={{ style: { fontSize: "12px" } }}
                    />
                    <TextField
                        id="Email"
                        label="Email"
                        type="email"
                        size="small"
                        InputLabelProps={{ style: { fontSize: "12px" } }}
                    />
                    <TextField
                        id="Subject"
                        label="Subject"
                        type="text"
                        size="small"
                        InputLabelProps={{ style: { fontSize: "12px" } }}
                    />

                    <TextareaAutosize
                        aria-label="Your Message"
                        placeholder="Message ..."
                        style={{ height: '150px', resize: 'none' }}
                    />

                    <Button variant='contained' color='button'>
                        <Typography variant='subtitle1' sx={{
                            fontWeight: "600",
                            fontSize: { xs: "12px", md: "12px" },
                        }}>
                            Send Message
                        </Typography>
                    </Button>
                </Box>


                {/* address and social media icons */}
                <Box>

                    {/* address */}
                    <Box>

                        {/* title */}
                        <Typography variant="h5" sx={{
                            fontSize: { xs: "15px", md: "20px" },
                            fontWeight: "600", mb: "20px"
                        }}>
                            Visit us :
                        </Typography>

                        {/* address content */}
                        <Box sx={{
                            mb: "10px", display: "flex", gap: "10px"
                        }}>
                            <HiLocationMarker size={22} />
                            <Box>
                                <Typography variant="grayText" component="p" sx={{
                                    fontSize: { xs: "11px", md: "12px", xl: "12.5px" },
                                    mb: "5px", fontWeight: "600"
                                }}>
                                    266 place ernesr granier
                                    34000 montpelier france
                                </Typography>
                                <Typography variant="grayText" component="p" sx={{
                                    fontSize: { xs: "11px", md: "12px", xl: "12.5px" },
                                    mb: "5px", fontWeight: "600"
                                }}>
                                    +44 512 18 21 86
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{
                            mb: "10px", display: "flex", gap: "10px"
                        }}>
                            <HiLocationMarker size={22} />
                            <Box>
                                <Typography variant="grayText" component="p" sx={{
                                    fontSize: { xs: "11px", md: "12px", xl: "12.5px" },
                                    mb: "5px", fontWeight: "600"
                                }}>
                                    30 eastbourne terrace
                                    paddington,london
                                    w2 6la, uk
                                </Typography>
                                <Typography variant="grayText" component="p" sx={{
                                    fontSize: { xs: "11px", md: "12px", xl: "12.5px" },
                                    mb: "5px", fontWeight: "600"
                                }}>
                                    +55 14 5135 1051
                                </Typography>
                            </Box>
                        </Box>
                    </Box>


                    {/* social media icons */}
                    <Box sx={{
                        display: "flex", alignItems: "center",
                        gap: "15px", mt: "30px"
                    }}>
                        <BsTwitter size={25} style={{ cursor: "pointer" }} />
                        <BsFacebook size={25} style={{ cursor: "pointer" }} />
                        <BsLinkedin size={25} style={{ cursor: "pointer" }} />
                        <BsInstagram size={25} style={{ cursor: "pointer" }} />
                        <BsPinterest size={25} style={{ cursor: "pointer" }} />
                        <BsDribbble size={25} style={{ cursor: "pointer" }} />
                    </Box>

                </Box>

            </Box>

        </Box>
    );
}

export default ContactUsForm;