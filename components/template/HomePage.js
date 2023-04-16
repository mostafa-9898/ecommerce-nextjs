// components
import Brands from "../module/HomePage/Brands";
import Category from "../module/HomePage/Category";
import FridayOff from "../module/HomePage/FridayOff";
import Header from "../module/HomePage/Header";
import WeOffer from "../module/HomePage/WeOffer";

// mui
import { Box } from "@mui/material";

// maxWidth: '1576px', m: 'auto', px: { xs: "20px", xl: "40px" },
function HomePage() {
    return (
        <Box>

            <Header />
            <Brands />
            <WeOffer />
            <Category />
            <FridayOff />

        </Box>
    );
}

export default HomePage;