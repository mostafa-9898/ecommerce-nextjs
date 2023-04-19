import Image from "next/image";

// mui
import { Box, Typography } from "@mui/material";

function WeChanging() {
    return (
        <Box sx={{
            display: "flex", justifyContent: "center", alignItems: "center",
            backgroundColor: "#246a73", mt: { xs: "70px", md: "100px" },
            flexDirection: { xs: "column", xl: "row" }
        }}>

            {/* content */}
            <Box sx={{
                width: "100%", display: 'flex', flexDirection: "column",
                justifyContent: "center", alignItems: "center",
                px: { xs: "20px", md: "70px", xl: "20px", xxl: "70px" },
                height: { xs: "230px", xl: "auto" }
            }}>

                {/* title */}
                <Typography variant="h3"
                    sx={{
                        fontWeight: "600", mb: '20px', color: "white",
                        fontSize: { xs: "20px", md: "30px", xl: "25px", xxl: "40px" },
                    }}>
                    We&apos;re changing the way things get made.
                </Typography>

                {/* descriptions */}
                <Typography variant="grayText" component="p" sx={{
                    fontSize: { xs: "10px", md: "11px", xxl: "13px" },
                    fontWeight: "600", color: "#dee2e6",
                    wordSpacing: "1px", lineHeight: { xs: "19px", md: "22px" }, textAlign: "justify"
                }}>
                    There are many variations of passages of lorem ipsum available
                    but the majority have suffered alteration in some form.
                    Lorem Ipsum passages, andmore recently with desktop publishing.
                    Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                </Typography>

            </Box>

            {/* picture */}
            <Box sx={{
                display: "flex", width: { xs: "100%", xl: "110%" },
                justifyContent: "center", alignItems: "center",
            }}>
                <Image src="/pictures/WeChanging.jpg" alt="team picture"
                    width={800} height={500}
                />
            </Box>

        </Box>
    );
}

export default WeChanging;