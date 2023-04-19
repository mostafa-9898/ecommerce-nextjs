// components
import Brands from "../module/HomePage/Brands";
import Category from "../module/HomePage/Category";
import FridayOff from "../module/HomePage/FridayOff";
import HomeHeader from "../module/HomePage/HomeHeader";
import JoinUs from "../module/HomePage/JoinUs";
import WeOffer from "../module/HomePage/WeOffer";

// mui
import { Box } from "@mui/material";

// maxWidth: '1576px', m: 'auto', px: { xs: "20px", xl: "40px" },
function HomePage() {
    return (
        <Box>

            <HomeHeader />
            <Brands />
            <WeOffer />
            <Category />
            <FridayOff />
            <JoinUs />

        </Box>
    );
}

export default HomePage;