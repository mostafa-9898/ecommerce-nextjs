import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

// context
import { ColorModeContext } from "../../../theme/MUI_MODE";

// mui
import {
    Accordion, AccordionDetails,
    AccordionSummary, Box, Checkbox,
    Drawer, FormControlLabel, Rating,
    IconButton, List, ListItem,
    Tooltip, Typography,
} from "@mui/material";

// icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BiReset, BiFilterAlt } from 'react-icons/bi';


const FilterProducts = () => {

    const router = useRouter();

    const [query, setQuery] = useState({ category: "", rate: "" });

    const changeHandler = (event) => {
        setQuery({ ...query, [event.target.name]: event.target.value });
    };

    const resetHandler = () => {
        setQuery({ category: "", rate: "" });
        router.replace({
            pathname: "/products",
            query: { category: "", rate: "" }
        })
    };
    useEffect(() => {
        if (router.query.category !== query.category || router.query.rate !== query.rate) {
            setQuery(router.query);
        }
    }, [])
    useEffect(() => {
        if (query.category || query.rate) {
            router.replace({
                pathname: "/products",
                query
            })
        }
    }, [query]);


    return (
        <Box>

            {/* desktop filter
                check the below for this component  */}
            <Box sx={{
                display: { xs: "none", xl: "block" }
            }}>
                <DesktopFilter
                    query={query}
                    changeHandler={changeHandler}
                    resetHandler={resetHandler}
                />
            </Box>


            {/* responsive filter
                check the below for this component */}
            <Box sx={{
                display: { xs: "block", xl: "none" },
                position: 'relative'
            }}>
                <ResponsiveFilter
                    query={query}
                    changeHandler={changeHandler}
                    resetHandler={resetHandler}
                />
            </Box>

        </Box>
    );
}
export default FilterProducts;


const DesktopFilter = ({ changeHandler, resetHandler, query }) => {

    const { mode } = useContext(ColorModeContext);

    return (
        <Box sx={{
            width: "300px"
        }}>

            {/* title and reset filter */}
            <Box sx={{
                display: "flex", alignItems: "center",
                justifyContent: "space-between",
                px: "10px", height: "60px",
            }}>

                {/* title */}
                <Typography variant='body2' sx={{
                    fontWeight: "600", fontSize: "18px",
                    display: "flex", alignItems: "center",
                    gap: "5px"
                }}>
                    <BiFilterAlt size={17} />
                    Filtering
                </Typography>

                {/* reset button */}
                {query.category || query.rate ?
                    <Tooltip title='reset filter' onClick={resetHandler}>
                        <IconButton color="primary">
                            <BiReset fontSize={20} />
                        </IconButton>
                    </Tooltip>
                    :
                    null
                }

            </Box>


            {/* category */}
            <Accordion sx={{
                backgroundColor: `${mode == 'dark' && '#252422'}`,
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant='text' sx={{
                        fontWeight: "500"
                    }}>
                        Category
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'flex-start', justifyContent: 'flex-start',
                        pl: "10px"
                    }}>
                        <FormControlLabel label="Men's" control={
                            <Checkbox
                                checked={query.category === "men's clothing"}
                                onChange={changeHandler} value="men's clothing"
                                name="category" size="small"
                            />} />
                        <FormControlLabel label="Women's" control={
                            <Checkbox
                                checked={query.category === "women's clothing"}
                                onChange={changeHandler} value="women's clothing"
                                name="category" size="small"
                            />} />
                        <FormControlLabel label="Jewelery" control={
                            <Checkbox
                                checked={query.category === "jewelery"}
                                onChange={changeHandler} value="jewelery"
                                name="category" size="small"
                            />} />
                        <FormControlLabel label="Electronics" control={
                            <Checkbox
                                checked={query.category === "electronics"}
                                onChange={changeHandler} value="electronics"
                                name="category" size="small"
                            />} />
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/* rate */}
            <Accordion sx={{
                backgroundColor: `${mode == 'dark' && '#252422'}`,
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel1a-header"
                >
                    <Typography variant='text' sx={{
                        fontWeight: "500"
                    }}>
                        Rate
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'flex-start', justifyContent: 'flex-start',
                        pl: "10px"
                    }}>
                        <FormControlLabel
                            label={
                                <Rating
                                    name="read-only"
                                    value={5}
                                    readOnly
                                    precision={0.5}
                                    size="small"
                                />
                            }
                            control={
                                <Checkbox
                                    checked={query.rate === "4"}
                                    onChange={changeHandler} value="4"
                                    name="rate"
                                    size="small"
                                />}
                        />
                        <FormControlLabel
                            label={
                                <Rating
                                    name="read-only"
                                    value={4}
                                    readOnly
                                    precision={0.5}
                                    size="small"
                                />
                            }
                            control={
                                <Checkbox
                                    checked={query.rate === "3"}
                                    onChange={changeHandler} value="3"
                                    name="rate"
                                    size="small"
                                />}
                        />
                        <FormControlLabel
                            label={
                                <Rating
                                    name="read-only"
                                    value={3}
                                    readOnly
                                    precision={0.5}
                                    size="small"
                                />
                            }
                            control={
                                <Checkbox
                                    checked={query.rate === "2"}
                                    onChange={changeHandler} value="2"
                                    name="rate"
                                    size="small"
                                />}
                        />

                    </Box>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}


const ResponsiveFilter = ({ changeHandler, resetHandler, query }) => {

    const [menu, setMenu] = useState();

    return (
        <Box sx={{
            display: { xl: "none", xs: "block" },
        }}>

            {/* filter icon */}
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setMenu(true)}
            >
                <Typography variant='body2' sx={{
                    fontWeight: "600", fontSize: "18px",
                    display: "flex", alignItems: "center",
                    gap: "5px"
                }}>
                    <BiFilterAlt size={17} />
                    Filtering
                </Typography>
            </IconButton>


            {/* bottom filter */}
            <Drawer
                anchor='bottom'
                open={menu}
                onClose={() => setMenu(false)}
            >
                <Box role="presentation"
                    onClick={() => setMenu(false)}
                    onKeyDown={() => setMenu(false)}
                >

                    {/* title and reset filter */}
                    <List sx={{
                        width: "100%", height: "50px",
                        display: 'flex', justifyContent: "space-between",
                        alignItems: "center", mt: "10px",
                        px: "20px", height: "50px",
                    }}>

                        {/* title */}
                        <Typography variant='body2' sx={{
                            fontWeight: "600", fontSize: "18px",
                            display: "flex", alignItems: "center",
                            gap: "5px"
                        }}>
                            <BiFilterAlt size={17} />
                            Filter
                        </Typography>

                        {/* reset button */}
                        {query.category || query.rate ?
                            <Tooltip title='reset filter' onClick={resetHandler}>
                                <IconButton color="primary">
                                    <BiReset fontSize={20} />
                                </IconButton>
                            </Tooltip>
                            :
                            null
                        }

                    </List>

                    {/* items */}
                    <List>
                        <ListItem disablePadding
                            sx={{
                                p: "20px",
                                display: 'flex', alignItems: "start",
                                justifyContent: "space-around"
                            }}
                        >

                            {/* section 1 */}
                            <Box>

                                {/* title */}
                                <Typography variant='body1' sx={{
                                    fontWeight: "600", fontSize: "20px",
                                    pb: "10px"
                                }}>
                                    Category
                                </Typography>

                                {/* items */}
                                <Box sx={{
                                    display: 'flex', flexDirection: 'column',
                                    alignItems: 'flex-start', justifyContent: 'flex-start',
                                    pl: "20px"
                                }}>
                                    <FormControlLabel label="Men's" control={
                                        <Checkbox
                                            checked={query.category === "men's clothing"}
                                            onChange={changeHandler} value="men's clothing"
                                            name="category" size="small"
                                        />} />
                                    <FormControlLabel label="Women's" control={
                                        <Checkbox
                                            checked={query.category === "women's clothing"}
                                            onChange={changeHandler} value="women's clothing"
                                            name="category" size="small"
                                        />} />
                                    <FormControlLabel label="Jewelery" control={
                                        <Checkbox
                                            checked={query.category === "jewelery"}
                                            onChange={changeHandler} value="jewelery"
                                            name="category" size="small"
                                        />} />
                                    <FormControlLabel label="Electronics" control={
                                        <Checkbox
                                            checked={query.category === "electronics"}
                                            onChange={changeHandler} value="electronics"
                                            name="category" size="small"
                                        />} />
                                </Box>
                            </Box>


                            {/* section 2 */}
                            <Box>

                                {/* title */}
                                <Typography variant='body1' sx={{
                                    fontWeight: "600", fontSize: "20px",
                                    pb: "10px"
                                }}>
                                    Rate
                                </Typography>

                                {/* items */}
                                <Box sx={{
                                    display: 'flex', flexDirection: 'column',
                                    alignItems: 'flex-start', justifyContent: 'flex-start',
                                    pl: "10px"
                                }}>
                                    <FormControlLabel
                                        label={
                                            <Rating
                                                name="read-only"
                                                value={5}
                                                readOnly
                                                precision={0.5}
                                                size="small"
                                            />
                                        }
                                        control={
                                            <Checkbox
                                                checked={query.rate === "4"}
                                                onChange={changeHandler} value="4"
                                                name="rate"
                                                size="small"
                                            />}
                                    />
                                    <FormControlLabel
                                        label={
                                            <Rating
                                                name="read-only"
                                                value={4}
                                                readOnly
                                                precision={0.5}
                                                size="small"
                                            />
                                        }
                                        control={
                                            <Checkbox
                                                checked={query.rate === "3"}
                                                onChange={changeHandler} value="3"
                                                name="rate"
                                                size="small"
                                            />}
                                    />
                                    <FormControlLabel
                                        label={
                                            <Rating
                                                name="read-only"
                                                value={3}
                                                readOnly
                                                precision={0.5}
                                                size="small"
                                            />
                                        }
                                        control={
                                            <Checkbox
                                                checked={query.rate === "2"}
                                                onChange={changeHandler} value="2"
                                                name="rate"
                                                size="small"
                                            />}
                                    />

                                </Box>
                            </Box>


                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}
