import Head from 'next/head'

// mui
import { Box } from '@mui/material'

// component
import Category from '../components/Category'
import Slider from '../components/Slider'

export default function Home() {

  return (
    <Box>

      <Box>
        <Slider />
      </Box>

      <Box>
        <Category />
      </Box>


    </Box>
  )
}
