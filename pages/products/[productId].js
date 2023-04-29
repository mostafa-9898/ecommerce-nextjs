import axios from "axios";

// component
import ProductDetailPage from "../../components/template/ProductDetailPage";

// mui
import { Box } from "@mui/material";

const ProductDetail = ({ product }) => {
    return (
        <Box>
            <ProductDetailPage product={product} />
        </Box>
    );
};
export default ProductDetail;



export async function getStaticPaths() {
    const result = await axios.get(`https://fakestoreapi.com/products`);
    const data = await result.data;

    const paths = data.map(item => ({ params: { productId: `${item.id}` } }));

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const { params } = context;

    const result = await axios.get(`https://fakestoreapi.com/products/${params.productId}`);
    const data = await result.data;

    return {
        props: { product: data },
        revalidate: 7 * 24 * 60 * 60  // 7 days
    }
}