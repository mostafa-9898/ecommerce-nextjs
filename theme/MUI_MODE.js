import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext({
    toggleMode: () => { },
    mode: 'light'
})

export const ColorContextProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const colorMode = useMemo(
        () => ({
            toggleMode: () => setMode(prevMode => prevMode === 'light' ? 'dark' : 'light'),
            mode
        }), [mode]
    )

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 450,
                md: 600,
                lg: 900,
                xl: 1024,
                xxl: 1200
            }
        },
        typography: {
            fontFamily: [
                'Commissioner',
                'sans-serif',
                'Dancing Script',
                'cursive',
            ].join(','),
            grayText: {
                color: mode === 'light' ? '#6c757d' : '#adb5bd',
            },
            button: {
                textTransform: 'none'
            }
        },
        palette: {
            mode: mode, // light or dark
            primary: {
                main: mode === 'light' ? '#000000' : '#ffffff'
            },
            secondary: {
                main: '#ffffff'
            },
            info: {
                main: '#998e76'
            },
            warning: {
                main: '#ea7317',
                dark: "#e36414"
            },
            button: {
                main: '#4d7c8a',
                dark: '#264653',
            },
            navCart: {
                main: "#88A47C"
            },
            productBtn: {
                main: "#0288d1",
                dark: "#01579b"
            }

        },
    })


    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )

}