import React from 'react'
import FoodItem from './FoodItem';
import Carousel from "nuka-carousel"
import { Grid, Typography } from '@mui/material';
const Gallery = (props) => {

    const data = props.data
    const defaultControlsConfig = {
        nextButtonText: '>',
        prevButtonText: '<',
        pagingDotsStyle: {
            display: 'none'
        }
    }
    console.log(data)

    const entress = data.entress.map((item) => (
        <FoodItem data={item} key={item.id} />
    ));
    const appetizer = data.appetizer.map((item) => (
        <FoodItem data={item} key={item.id} />
    ));
    
    const drink = data.drink.map((item) => (
        <FoodItem data={item} key={item.id} />
    ));

    return (
        <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12} md={5} lg={5}>
                <Typography variant='h5' sx={{p:1}}>Appetizer</Typography>
                <Carousel defaultControlsConfig={defaultControlsConfig} dragging={false}>
                    {appetizer}
                </Carousel>
            </Grid>
            <Grid item xs={12}  md={5} lg={5}>
                <Typography variant='h5' sx={{p:1}}>Entress</Typography>
                <Carousel defaultControlsConfig={defaultControlsConfig} dragging={false}>
                    {entress}
                </Carousel>
            </Grid>
            <Grid item xs={12}  md={5} lg={5}>
                <Typography variant='h5' sx={{p:1}}>Drink</Typography>
                <Carousel defaultControlsConfig={defaultControlsConfig} dragging={false}>
                    {drink}
                </Carousel>
            </Grid>
        </Grid>
    );

}

export default Gallery

