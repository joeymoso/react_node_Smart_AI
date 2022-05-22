import React from "react";
import { Box } from "@mui/material";
import { Typography, Link } from '@mui/material'


const footerStyle = {
    position: "fixed",
    bottom: "0",
    width: "100%"
};

function Copyright() {
    return (
        <div>
        <Typography variant="subtitle1" color="white" align="center">
            {'© Powerd by '}
            
        </Typography>
        <Typography variant="subtitle1" color="white" align="center">
        <Link color="inherit" href="https://fredrikoseberg.github.io/react-chatbot-kit-docs/" target="_blank">
                react-chatbot-kit
            </Link>{' '}
            <Link color="inherit" href="https://github.com/FormidableLabs/nuka-carousel" target="_blank">
                nuka-carousel
            </Link>{' '}
            <Link color="inherit" href="https://rapidapi.com/spoonacular/api/recipe-food-nutrition/" target="_blank">
                rapidapi
            </Link>
            </Typography>
        </div>
    );
}

const Footer = () => {
    return (
        <Box style={footerStyle} sx={{ bgcolor: "#376B7E", py: 1 }} component="footer">
            <Copyright />
        </Box>
    )
}

export default Footer