
// mui
import {
    Box, Button,
    TextField, Typography
} from "@mui/material";

function JoinUs() {
    return (
        <Box sx={{
            maxWidth: '750px', m: 'auto', px: { xs: "20px", xl: "40px" },
            mt: "100px"
        }}>

            <Box sx={{
                display: "flex", alignItems: "center", justifyContent: "center",
                flexDirection: "column"
            }}>

                {/* title */}
                <Typography variant="h4" sx={{
                    fontWeight: "600",
                    mb: "10px", textAlign: "center",
                    fontSize: { xs: "25px", md: "35px" }
                }}>
                    Subscribe our newsletter to get updates to our latest collections
                </Typography>

                {/* descriptions 1 */}
                <Typography variant="grayText" component="p" sx={{
                    mb: "15px", fontWeight: "500", textAlign: "center",
                    fontSize: { xs: "11px", md: "12px", xl: "12.5px" },
                }}>
                    Get 20% off on your first order just by subscribing to our newsletter!
                </Typography>

                {/* input and button */}
                <Box sx={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    gap: "3px", mb: "5px"
                }}>

                    <Box>
                        <TextField id="outlined-basic" label="Email Address"
                            variant="outlined" size="small"
                            InputLabelProps={{ style: { fontSize: "13px" } }}
                        />
                    </Box>

                    <Button variant='contained' color='button' sx={{
                        width: { xs: "80px", md: "100px", xl: "90px" },
                        height: "38px",
                    }}>

                        <Typography variant='subtitle1' sx={{
                            color: 'white', fontWeight: "500",
                            fontSize: { xs: "11px", xl: "12px" },
                        }}>
                            Subscribe
                        </Typography>

                    </Button>

                </Box>

                {/* descriptions 2 */}
                <Typography variant="grayText" component="p" sx={{
                    width: "230px", textAlign: "center",
                    fontSize: { xs: "10.5px", md: "12px" },
                    wordSpacing: "0.5px"
                }}>
                    You will be able to unsubscribe at any time.
                    Read our Privacy Policy
                    <a href="#" style={{ marginLeft: "3px", color: "#8d99ae" }}>
                        here
                    </a>
                </Typography>

            </Box>

        </Box>
    );
}

export default JoinUs;