import Image from "next/image";

// component
import CardButtons from "../elements/CardButtons";

// mui
import { Box, Rating, Typography } from "@mui/material";

function ProductDetailPage({ product }) {

    console.log(product)
    return (
        <Box sx={{
            maxWidth: '1576px', m: 'auto', px: { xs: "10px", xl: "50px" },
            minHeight: "60vh", pt: { xs: "40px", xl: "80px" },
        }}>

            {/* product Detail */}
            <Box sx={{
                display: 'flex', alignItems: 'center',
                flexDirection: { xs: "column", xl: "row" },
                justifyContent: 'center',
                gap: { xs: "40px", xl: "100px" },
            }}>

                {/* Image */}
                <Box sx={{
                    width: { xs: '90%', xl: '30%' },
                    textAlign: { xs: 'center', xl: 'end' },
                }}>
                    <Image src={product.image} alt='productImage'
                        width={430} height={450}
                        style={{ borderRadius: "5px" }}
                    />
                </Box>


                {/* information */}
                <Box sx={{
                    width: { xs: '90%', xl: '30%' },
                }}>

                    <Box sx={{
                        display: "flex", flexDirection: "column",
                        gap: "15px", borderBottom: "1px solid #e9ecef",
                        pb: "20px", mb: "20px"
                    }}>
                        {/* title */}
                        <Typography variant="body1" sx={{
                            fontWeight: "600",
                            fontSize: { xs: "30px", md: "35px" }
                        }}>
                            {product.title.slice(0, 11)}
                        </Typography>

                        {/* rate */}
                        <Box sx={{
                            display: "flex", alignItems: "center",
                            gap: "10px"
                        }}>
                            <Rating
                                name="read-only"
                                value={product.rating.rate}
                                readOnly
                                precision={0.5}
                                size="medium"
                            />
                            <Typography variant="grayText" component="p" sx={{
                                fontWeight: "600",
                                fontSize: { xs: "12px", md: "13px", xl: "14px" },
                            }}>
                                ({product.rating.rate})
                            </Typography>
                        </Box>

                        {/* price */}
                        <Typography variant="body1" sx={{
                            fontSize: "25px", fontWeight: "600"
                        }}>
                            ${product.price}
                        </Typography>
                    </Box>

                    {/* Buttons */}
                    <Box sx={{
                        borderBottom: "1px solid #e9ecef",
                        pb: "20px", mb: "20px"
                    }}>
                        <CardButtons product={product} />
                    </Box>

                    <Box>
                        <Typography variant="h5" sx={{
                            fontWeight: "600", mb: "5px",
                            fontSize: { xs: "15px", md: "16px" },
                        }}>
                            Product&apos;s Detail :
                        </Typography>

                        <Typography variant="grayText" component="p" sx={{
                            fontSize: { xs: "13px", md: "14px" },
                            mb: "15px", textAlign: "justify",
                            lineHeight: "19px", fontWeight: "500"
                        }}>
                            {product.description}
                        </Typography>
                    </Box>

                </Box>
            </Box>

        </Box>
    );
}

export default ProductDetailPage;