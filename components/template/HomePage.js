// components
import Brands from "../module/HomePageModules/Brands";
import Category from "../module/HomePageModules/Category";
import FridayOff from "../module/HomePageModules/FridayOff";
import HomeHeader from "../module/HomePageModules/HomeHeader";
import JoinUs from "../module/HomePageModules/JoinUs";
import WeOffer from "../module/HomePageModules/WeOffer";

// mui
import { Box } from "@mui/material";


function HomePage() {
    return (
        <Box sx={{ maxWidth: "1920px", m: 'auto' }}>

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