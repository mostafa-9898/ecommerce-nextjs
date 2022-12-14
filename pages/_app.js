import Head from 'next/head'

// mui for backgraound
import { Paper } from '@mui/material'

// mui theme
import { ColorContextProvider } from '../theme/MUI_MODE'

// components
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
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
        <title>Ecommerce NextJs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ColorContextProvider>
        <Provider store={Store}>
          <Paper variant='outlined'
            sx={{ boxShadow: 'none', borderRadius: '0', border: 'none', px: '10px' }}>
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
