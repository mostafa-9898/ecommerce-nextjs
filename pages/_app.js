import Head from 'next/head'

// mui for backgraound
import { Box, Container, Paper } from '@mui/material'

// mui theme
import { ColorContextProvider } from '../theme/MUI_MODE'

// components
import Footer from '../components/module/Footer'
import Navbar from '../components/module/Navbar'
import ScrollToTop from '../components/ScrollToTop'
import '../styles/globals.css'

// redux
import { Provider } from 'react-redux'
import Store from '../redux/store'

// progressbar
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ecoShop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <ColorContextProvider>
        <Provider store={Store}>

          <Paper variant='elevation'
            sx={{ boxShadow: 'none', borderRadius: '0', border: 'none', p: '0px', m: "0px" }}>
            <NextNProgress
              color="#29D"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
            />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
            <ScrollToTop />
          </Paper>

        </Provider>
      </ColorContextProvider>
    </>
  )
}

export default MyApp
