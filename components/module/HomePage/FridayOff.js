import Image from "next/image";

// mui
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/Hi";

function FridayOff() {
    return (
        <Box sx={{
            maxWidth: '1576px', m: 'auto', px: { xs: "20px", xl: "40px" },
            mt: "100px"
        }}>

            <Box sx={{
                display: "flex", alignItems: "center", justifyContent: "space-evenly",
                flexDirection: { xs: "column", xl: "row" }, gap: { xs: "20px", md: "30px" },
                backgroundColor: "#6D9886", py: { xs: "20px", md: "50px" },
                borderRadius: "15px",
            }}>

                {/* picture */}
                <Box sx={{
                    width: { xs: "290px", md: "600px", xl: "350px", xxl: "500px" },
                }}>
                    <Image src="/pictures/off.jpg" alt="off" width="700px" height="500px"
                        style={{ borderRadius: "15px" }} />
                </Box>

                {/* text */}
                <Box sx={{
                    width: { xs: "280px", md: "590px", xl: "450px", xxl: "600px" },
                    display: "flex", flexDirection: "column", gap: "10px",
                    alignItems: "left", justifyContent: "left"
                }}>

                    <Typography variant="body2"
                        sx={{
                            fontSize: { xs: "12px", md: "14px" },
                            color: "#dee2e6"
                        }}
                    >
                        LIMITED OFFER
                    </Typography>

                    <Typography variant="h4"
                        sx={{
                            fontWeight: "600", color: "white",
                            fontSize: { xs: "25px", md: "35px", xl: "30px" }
                        }}
                    >
                        35% off only yhis friday and get special gift !
                    </Typography>

                    <Link href='/products'>
                        <Button variant='contained' color='warning'
                            sx={{
                                width: { xs: "110px", md: "130px", xl: "130px" },
                                height: { xs: "35px", md: "40px", xl: "42px" },
                                mt: "20px"
                            }}>
                            <Typography variant='subtitle1' color='white'
                                fontWeight={500} fontSize={{ xs: "10px", md: "13px" }}
                                mr="7px"
                            >
                                Grab it now
                            </Typography>
                            <><HiOutlineArrowRight color="white" /></>
                        </Button>
                    </Link>
                </Box>

            </Box>

        </Box>
    );
}

export default FridayOff;