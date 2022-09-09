import { useState } from "react";
import axios from "axios";

// mui
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

// component
import ProductCard from "../../components/ProductCard";
import Sidebar from "../../components/Sidebar";


const Products = ({ products }) => {

    const isTablet = useMediaQuery('(max-width:900px)')

    const [dynamicState, setDynamicState] = useState(products)

    return (
        <Box maxWidth='1152px' m='auto' py={`${isTablet ? '5px' : '40px'}`}
            display='flex' justifyContent='space-between' gap='10px'
            flexDirection={`${isTablet ? 'column' : 'row'}`}
        >

            {/* Side bar for filter the products */}
            <Sidebar setDynamicState={setDynamicState} products={products} />

            {/* Products card */}
            <Box width='100%' display='flex' flexWrap='wrap'
                gap='20px' justifyContent={`${isTablet && 'center'}`}>
                {dynamicState.map(product => <ProductCard key={product.id} product={product} />)}
            </Box>

        </Box>
    );
}

export default Products;

export const getServerSideProps = async () => {
    const result = await axios.get('https://fakestoreapi.com/products')
    const data = result.data

    return {
        props: {
            products: data
        }
    }
}