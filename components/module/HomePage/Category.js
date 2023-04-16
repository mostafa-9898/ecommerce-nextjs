import Image from "next/image";

// elements
import { MyBtn } from "../../elements/MyBtn";

// mui
import { Box, Typography } from "@mui/material";
import Link from "next/link";

function Category() {

    return (
        <Box sx={{
            mt: "100px",
            maxWidth: '1576px', m: 'auto', px: { xs: "20px", xl: "50px" },
        }}>

            {/* title of this section */}
            <Box sx={{
                mt: { xs: "60px", md: "", xl: "100px" }, mb: "40px",
            }}>

                <Box>

                    <Typography variant="h4" component="h3" sx={{
                        borderBottom: "1px solid #6c757d", fontWeight: "600", pb: "15px",
                        fontSize: { xs: "25px", md: "35px" }, width: { xs: "270px", md: "450px" }
                    }}>
                        Category of products
                    </Typography>

                </Box>

            </Box>



            {/* Men Clothes */}
            <Box sx={{
                display: "flex", flexDirection: { xs: "column", md: "row" },
                justifyContent: { xs: "center", xl: "space-evenly" }, alignItems: "center",
                gap: { xs: "20px", md: "20px", xl: "50px" },
            }}>

                {/* picture for mobiles and tablets */}
                <Box display={{ xs: "block", md: "none" }}>
                    <Image src="/category/MenClothes.jpg" alt="Men-Clothes" width="370px" height="500px"
                        style={{ borderRadius: "10px" }}
                    />
                </Box>
                {/* picture for Desktops */}
                <Box display={{ xs: "none", md: "block" }}>
                    <Image src="/category/MenClothes.jpg" alt="Men-Clothes" width="450px" height="600px"
                        style={{ borderRadius: "10px" }}
                    />
                </Box>


                {/* title */}
                <Box sx={{
                    width: { xs: "290px", md: "370px", xl: "600px" }
                }}>

                    <Typography variant="h4" sx={{
                        fontWeight: "700", fontSize: { xs: "20px", md: "35px", xl: "45px" },
                        mb: { xs: "8px", md: "10px", xl: "15px" }
                    }}>
                        Men's Clothes
                    </Typography>

                    <Typography variant="grayText" component="p" sx={{
                        fontSize: { xs: "11px", md: "12px", xl: "14px" },
                        mb: { xs: "15px", md: "30px", xl: "30px" },
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged It was popularised
                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing.
                    </Typography>

                    <Link href='/products' passHref legacyBehavior>
                        <MyBtn />
                    </Link>

                </Box>


            </Box>

            {/* Women Clothes */}
            <Box sx={{
                display: "flex", flexDirection: { xs: "column", md: "row" },
                justifyContent: { xs: "center", xl: "space-evenly" }, alignItems: "center",
                gap: { xs: "20px", md: "20px", xl: "50px" }, my: "40px",
            }}>

                {/* picture for mobiles and tablets */}
                <Box display={{ xs: "block", md: "none" }}>
                    <Image src="/category/WomenClothes.jpg" alt="Men-Clothes" width="370px" height="500px"
                        style={{ borderRadius: "10px" }}
                    />
                </Box>

                {/* title */}
                <Box sx={{
                    width: { xs: "320px", md: "370px", xl: "600px" }
                }}>

                    <Typography variant="h4" sx={{
                        fontWeight: "700", fontSize: { xs: "20px", md: "35px", xl: "45px" },
                        mb: { xs: "8px", md: "10px", xl: "15px" }
                    }}>
                        Women's Clothes
                    </Typography>

                    <Typography variant="grayText" component="p" sx={{
                        fontSize: { xs: "11px", md: "15px", xl: "14px" },
                        mb: { xs: "15px", md: "30px", xl: "30px" },
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged It was popularised
                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing.
                    </Typography>

                    <Link href='/products' passHref legacyBehavior>
                        <MyBtn />
                    </Link>

                </Box>


                {/* picture for Desktops */}
                <Box display={{ xs: "none", md: "block" }}>
                    <Image src="/category/WomenClothes.jpg" alt="Men-Clothes" width="450px" height="600px"
                        style={{ borderRadius: "10px" }}
                    />
                </Box>


            </Box>

            {/* Electronics */}
            <Box sx={{
                display: "flex", flexDirection: { xs: "column", md: "row" },
                justifyContent: { xs: "center", xl: "space-evenly" }, alignItems: "center",
                gap: { xs: "20px", md: "20px", xl: "50px" }, mb: "40px",
            }}>

                {/* picture for mobiles and tablets */}
                <Box display={{ xs: "block", md: "none" }}>
                    <Image src="/category/electronics.jpg" alt="Men-Clothes" width="370px" height="470px"
                        style={{ borderRadius: "10px" }}
                    />
                </Box>
                {/* picture for Desktops */}
                <Box display={{ xs: "none", md: "block" }}>
                    <Image src="/category/electronics.jpg" alt="Men-Clothes" width="520px" height="600px"
                        style={{ borderRadius: "10px" }}
                    />
                </Box>

                {/* title */}
                <Box sx={{
                    width: { xs: "320px", md: "370px", xl: "600px" }
                }}>

                    <Typography variant="h4" sx={{
                        fontWeight: "700", fontSize: { xs: "20px", md: "35px", xl: "45px" },
                        mb: { xs: "8px", md: "10px", xl: "15px" }
                    }}>
                        Electronics
                    </Typography>

                    <Typography variant="grayText" component="p" sx={{
                        fontSize: { xs: "11px", md: "15px", xl: "14px" },
                        mb: { xs: "15px", md: "30px", xl: "30px" },
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged It was popularised
                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing.
                    </Typography>

                    <Link href='/products' passHref legacyBehavior>
                        <MyBtn />
                    </Link>

                </Box>

            </Box>

            {/* Jewelry */}
            <Box sx={{
                display: "flex", flexDirection: { xs: "column", md: "row" },
                justifyContent: { xs: "center", xl: "space-evenly" }, alignItems: "center",
                gap: { xs: "20px", md: "20px", xl: "50px" },
            }}>

                {/* picture for mobiles and tablets */}
                <Box display={{ xs: "block", md: "none" }}>
                    <Image src="/category/Jewelry.jpg" alt="Men-Clothes" width="370px" height="460px"
                        style={{ borderRadius: "10px" }}
                    />
                </Box>

                {/* title */}
                <Box sx={{
                    width: { xs: "320px", md: "370px", xl: "600px" }
                }}>

                    <Typography variant="h4" sx={{
                        fontWeight: "700", fontSize: { xs: "20px", md: "35px", xl: "45px" },
                        mb: { xs: "8px", md: "10px", xl: "15px" }
                    }}>
                        Jewelry
                    </Typography>

                    <Typography variant="grayText" component="p" sx={{
                        fontSize: { xs: "11px", md: "15px", xl: "14px" },
                        mb: { xs: "15px", md: "30px", xl: "30px" },
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged It was popularised
                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing.
                    </Typography>

                    <Link href='/products' passHref legacyBehavior>
                        <MyBtn />
                    </Link>

                </Box>


                {/* picture for Desktops */}
                <Box display={{ xs: "none", md: "block" }}>
                    <Image src="/category/Jewelry.jpg" alt="Men-Clothes" width="520px" height="600px"
                        style={{ borderRadius: "10px" }}
                    />
                </Box>


            </Box>

        </Box>
    );
}

export default Category;