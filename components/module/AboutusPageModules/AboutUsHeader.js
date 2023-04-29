import Image from "next/image";

// mui
import { Box, Typography } from "@mui/material";

// pic
import banner from '../../../public/pictures/AboutUs.jpg'

function AboutUsHeader() {

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
                <Image src={banner} alt='banner'
                    width={1200} height={850}
                    style={{ borderRadius: "10px" }}
                />
            </Box>


            {/* content */}
            <Box sx={{
                width: { xs: "100%", xl: "650px" }
            }}>

                {/* title */}
                <Typography variant="h3"
                    sx={{
                        fontWeight: "600", mb: '20px',
                        fontSize: { xs: "22px", md: "32px" }, pb: "10px",
                        borderBottom: "1px solid #6c757d",
                        width: { xs: "140px", md: "200px" },
                    }}>
                    Our Story
                </Typography>

                {/* descriptions 1 */}
                <Typography variant="grayText" component="p" sx={{
                    fontSize: { xs: "11px", md: "12px", xl: "12.5px" },
                    mb: "15px", fontWeight: "600", textAlign: "justify",
                    lineHeight: "20px",
                }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting.
                </Typography>

                {/* descriptions 2 */}
                <Typography variant="grayText" component="p" sx={{
                    fontSize: { xs: "11px", md: "12px", xl: "12.5px" },
                    mb: "15px", fontWeight: "600", textAlign: "justify",
                    lineHeight: "20px",
                }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged It was popularised
                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                    more recently with desktop publishing.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                </Typography>

            </Box>
        </Box>
    );
}

export default AboutUsHeader;