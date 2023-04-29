import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";

// component
import CardButtons from "../../elements/CardButtons";

// context for light and dark mode
import { ColorModeContext } from "../../../theme/MUI_MODE";

// mui
import {
    Box, Card, CardActionArea, CardActions,
    CardContent, CardMedia, Typography
} from "@mui/material";


const ProductCard = ({ product }) => {

    const { mode } = useContext(ColorModeContext);

    return (
        <>
            <Card sx={{
                width: { xs: "270px", md: "220px", xl: "250px" },
                height: "370px", borderRadius: '10px',
                backgroundColor: `${mode == 'dark' && '#252422'}`,
                "&:hover": { boxShadow: `${mode == 'dark' ? '0 0 7px 0 #FFFFFF' : '0 0 7px 0 #495057'}`, }
            }} >

                {/* product */}
                <Link href={`/products/${product.id}`}>

                    <CardActionArea>

                        {/* picture of product */}
                        <CardMedia sx={{
                            display: 'flex', alignItems: 'center', pt: "20px",
                            justifyContent: 'center', width: '100%', height: '100%',
                        }}>
                            <Image src={product.image}
                                width='210px' height='220px'
                                style={{ borderRadius: "5px" }}
                                loading="lazy"
                            />
                        </CardMedia>

                        {/* title and price of product */}
                        <CardContent>

                            <Box sx={{
                                display: "flex", alignItems: "center",
                                justifyContent: "space-between", pt: "5px"
                            }}>
                                {/* title */}
                                <Typography variant="body1" sx={{
                                    fontWeight: "500", mt: '5px', mb: '10px',
                                    fontSize: "16px"
                                }}>
                                    {product.title.slice(0, 11)}
                                </Typography>

                                {/* price */}
                                <Typography variant="body1" sx={{
                                    fontSize: "17px", fontWeight: "600"
                                }}>
                                    $ {product.price}
                                </Typography>
                            </Box>

                        </CardContent>

                    </CardActionArea>

                </Link>


                {/* buttons */}
                <CardActions sx={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'flex-end', px: "10px"
                }}>

                    <CardButtons product={product} />

                </CardActions>

            </Card>
        </>
    );
}

export default ProductCard;