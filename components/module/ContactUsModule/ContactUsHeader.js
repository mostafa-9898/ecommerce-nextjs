import Image from 'next/image';

// mui
import { Box } from '@mui/system';
import {
    Typography
} from '@mui/material';


function ContactUsHeader() {

    return (
        <Box sx={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: { xs: "30px", xl: "50px" },
            flexDirection: { xs: "column", xl: "row" },
            pt: "30px",
        }}>

            {/* picture */}
            <Box sx={{
                width: { xs: "100%", xl: "800px" }
            }}>
                <Image src="/pictures/ContactUs.jpg" alt="map picture"
                    width={1200} height={900}
                    style={{ borderRadius: "10px" }}
                />
            </Box>

            {/* content */}
            <Box sx={{
                width: { xs: "100%", xl: "650px" }
            }}>

                {/* title */}
                <Typography variant="h3" sx={{
                    fontWeight: "600", mb: '20px',
                    fontSize: { xs: "22px", md: "32px" }, pb: "10px",
                    borderBottom: "1px solid #6c757d",
                    width: { xs: "280px", md: "600px", xl: "500px" },
                }}>
                    Talk to our product analytics expert
                </Typography>

                {/* descriptions */}
                <Typography variant="grayText" component="p" sx={{
                    fontSize: { xs: "11px", md: "12px", xl: "12.5px" },
                    mb: "15px", fontWeight: "600", textAlign: "justify",
                    lineHeight: "20px",
                }}>
                    Have questions about pricing, plans, or growthly? fill out the form and our product
                    analytics expert will be in touch directly.when an unknown printer took a galley
                    of type and scrambled it to make atype specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting.but also the
                    leap into electronic typesetting, remaining essentially unchanged It was popularised
                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                    more recently with desktop publishing.
                </Typography>

            </Box>

        </Box>
    );
}

export default ContactUsHeader;