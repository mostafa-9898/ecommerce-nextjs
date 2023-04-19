
// components
import AboutUsHeader from '../module/AboutUsPage/AboutUsHeader';
import LittleBoxes from '../module/AboutUsPage/LittleBoxes';
import WeChanging from '../module/AboutUsPage/WeChanging';
import CustomersSay from '../module/AboutUsPage/CustomersSay';

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