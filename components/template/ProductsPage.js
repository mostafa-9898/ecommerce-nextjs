import { useState } from "react";

// component
import FilterProducts from "../module/ProductsPageModules/FilterProducts"
import ProductCard from "../module/ProductsPageModules/ProductCard"

//mui
import { Box, Button } from "@mui/material";


function ProductsPage({ products }) {

    const [cuttedProducts, setCuttedProducts] = useState(8);

    const loadMoreHandler = () => {
        setCuttedProducts(prevValue => prevValue + 4)
    }

    return (
        <Box sx={{
            maxWidth: '1576px', minHeight: "55vh", m: 'auto',
            px: { xs: "20px", xl: "50px" }, pt: "30px",
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between', gap: '30px',
                flexDirection: { xs: 'column', xl: 'row' },
            }}>

                {/* Side bar for filter the products */}
                <FilterProducts />


                {/* Products card */}
                <Box sx={{
                    width: '100%', display: 'flex', flexWrap: 'wrap',
                    gap: '20px', justifyContent: { xs: "center", md: "start" },
                }}>

                    {/* show the products */}
                    {products.slice(0, cuttedProducts).map(product =>
                        <ProductCard key={product.id} product={product} />
                    )}

                    {/* load more products button */}
                    {+products.length > cuttedProducts ?
                        <Box sx={{
                            width: "95%", textAlign: "center", mt: "20px"
                        }}>
                            <Button variant="outlined" onClick={loadMoreHandler}
                                sx={{ width: "200px" }}
                            >
                                Load more
                            </Button>
                        </Box>
                        :
                        null
                    }

                </Box>


            </Box>


        </Box>
    );
}

export default ProductsPage;