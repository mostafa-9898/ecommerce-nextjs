import axios from "axios";

// mui
import { Box } from "@mui/material";

// component
import ProductsPage from "../../components/template/ProductsPage";


const Products = ({ products }) => {
    return (
        <Box>
            <ProductsPage products={products} />
        </Box>
    );
}
export default Products;



export async function getServerSideProps(context) {
    const { query } = context;

    const result = await axios.get('https://fakestoreapi.com/products');
    const data = await result.data;

    // filtered data
    const filteredData = data.filter(item => {

        // category
        const categoryResult = item.category === query.category;

        // rate
        const rateResult = item.rating.rate >= +query.rate && item.rating.rate <= +query.rate + 1

        if (query.category && query.rate && categoryResult && rateResult) {
            return item
        } else if (query.category && !query.rate && categoryResult) {
            return item
        } else if (!query.category && query.rate && rateResult) {
            return item
        }
    });

    if (query.category || query.rate) {
        return {
            props: { products: filteredData },
        }
    } else if (!query.category && !query.rate) {
        return {
            props: { products: data },
        }
    }
}