
// component
import LoginPage from '../components/template/LoginPage';

// mui
import { Box } from '@mui/material';


const Login = () => {
    return (
        <Box sx={{
            maxWidth: '1576px', m: 'auto', px: { xs: "20px", xl: "50px" },
        }}>
            <LoginPage />
        </Box>
    );
}

export default Login;