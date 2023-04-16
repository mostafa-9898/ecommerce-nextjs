import { useEffect, useState } from "react";

// mui
import {
    Box, FormControl, FormControlLabel,
    InputLabel, MenuItem, Radio, RadioGroup, Select,
    Typography, useMediaQuery
} from "@mui/material";


const Sidebar = ({ products, setDynamicState }) => {

    const isTablet = useMediaQuery('(max-width:900px)')

    const [value, setValue] = useState('all')

    useEffect(() => {

        if (value === 'all') {
            setDynamicState(products)
        } else {
            const filterData = products.filter(item => item.category === value)
            setDynamicState(filterData)
        }
    }, [value])


    return (
        <>
            {isTablet ?
                <FormControl fullWidth>
                    <InputLabel id="Category">Category</InputLabel>
                    <Select
                        labelId="Category"
                        id="Category"
                        label="Category"
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    >
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="men's clothing">Mens clothing</MenuItem>
                        <MenuItem value="women's clothing">Womens clothing</MenuItem>
                        <MenuItem value="jewelery">Jewelery</MenuItem>
                        <MenuItem value="electronics">Electronics</MenuItem>
                    </Select>
                </FormControl>


                :


                <Box width='200px'>

                    <Box display='flex' alignItems='flex-start' justifyContent='flex-start' gap='15px' pt='30px'
                        flexDirection='column' minHeight='300px' borderRight='1px solid gray' pl='10px' pr='20px' mr='10px'
                    >
                        <Typography variant='text' component='h3'
                            fontWeight={600} sx={{ ml: '-10px' }}
                        >
                            Category
                        </Typography>


                        <RadioGroup
                            aria-labelledby="category"
                            name="category"
                            onChange={(event) => setValue(event.target.value)}
                            value={value}
                        >
                            <FormControlLabel value="all" control={<Radio />} label="All" />
                            <FormControlLabel value="men's clothing" control={<Radio />} label="Men's" />
                            <FormControlLabel value="women's clothing" control={<Radio />} label="Women's" />
                            <FormControlLabel value="jewelery" control={<Radio />} label="Jewelery" />
                            <FormControlLabel value="electronics" control={<Radio />} label="Electronics" />
                        </RadioGroup>

                    </Box>

                </Box>
            }
        </>
    );
}

export default Sidebar;