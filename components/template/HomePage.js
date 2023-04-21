// components
import Brands from "../module/HomeModule/Brands";
import Category from "../module/HomeModule/Category";
import FridayOff from "../module/HomeModule/FridayOff";
import HomeHeader from "../module/HomeModule/HomeHeader";
import JoinUs from "../module/HomeModule/JoinUs";
import WeOffer from "../module/HomeModule/WeOffer";

// mui
import { Box } from "@mui/material";


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