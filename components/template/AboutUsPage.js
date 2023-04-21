
// components
import AboutUsHeader from '../module/AboutUsModule/AboutUsHeader';
import LittleBoxes from '../module/AboutUsModule/LittleBoxes';
import WeChanging from '../module/AboutUsModule/WeChanging';
import CustomersSay from '../module/AboutUsModule/CustomersSay';

// mui
import { Box } from '@mui/material';


function AboutUsPage() {

    return (
        <Box sx={{
            maxWidth: '1576px', m: 'auto', px: { xs: "20px", xl: "50px" },
        }}>

            <AboutUsHeader />
            <LittleBoxes />
            <WeChanging />
            <CustomersSay />

        </Box>
    );
}

export default AboutUsPage;