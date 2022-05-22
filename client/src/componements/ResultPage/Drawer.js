import React, { useContext } from "react";
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import { styled, useTheme } from '@mui/material/styles';
import { Context, Stored } from "../../App.js";
import { List, ListItem, ListItemText, Typography, Box, Collapse, Alert } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EggIcon from '@mui/icons-material/Egg';
import CloseIcon from '@mui/icons-material/Close';

const DrawerRight = (props) => {
    const [stored, setStored] = useContext(Stored);
    const [setting, setSetting] = useContext(Context);
    const [open, setOpen] = React.useState(false);

    const drawerWidth = '60%';
    const theme = useTheme();
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }));

    const handleDelete = (id) => {
        setStored(stored.filter(item => item.id !== id))
    }


    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                },

            }}
            variant="persistent"
            anchor="right"
            open={props.open}
        >
            <DrawerHeader >
                <IconButton onClick={props.handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
                <Typography>Stored receipes</Typography>
                <IconButton sx={{ marginLeft: "auto" }} onClick={() => {
                    setOpen(!open);
                }}>
                    <EggIcon />
                </IconButton>
                <IconButton onClick={() => {

                    window.open(
                        'https://www.facebook.com/sharer/sharer.php?u=https://rapidapi.com/spoonacular/api/recipe-food-nutrition/',
                        '_blank' // <- This is what makes it open in a new window.
                    );
                }}>
                    <FacebookIcon />
                </IconButton>
                <IconButton onClick={() => {
                    
                    var tw = "My stored receipes: "
                    stored.forEach(item => {
                        tw += item.title + ", "
                    });
                    tw = tw.substring(0, tw.length-2)
                    tw = tw.replace(/[^a-zA-Z :,]/g, "")
                    window.open(
                        'https://twitter.com/intent/tweet?text=' + tw + '.',
                        '_blank' // <- This is what makes it open in a new window.
                    );
                    
                }}>
                    <TwitterIcon />
                </IconButton>
            </DrawerHeader>
            <Divider />
            <Collapse in={open}>
                <Alert
                    sx={{ mb: 2 }}
                >
                    <Typography>
                        {setting.allergic.length > 0 ? "Alergic to: " + setting.allergic.join(", ") : "No Allergic!"}
                    </Typography>
                    <Typography>
                        {setting.dietary.length > 0 ? "Dietary: " + setting.dietary.join(", ") : "No Diet!"}
                    </Typography>
                </Alert>
            </Collapse>
            <List >
                {stored.map(item => (
                    <ListItem key={item.id}>
                        <Box
                            component="img"
                            sx={{
                                width: '15%',
                                borderRadius: "25px"
                            }}
                            alt={item.title}
                            src={item.img}
                        />
                        <ListItemText sx={{ pl: 2 }} primary={item.title} />
                        <IconButton
                            color="inherit"
                            aria-label="delete"
                            edge="end"
                            onClick={() => { handleDelete(item.id) }}
                        >
                            <ClearIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default DrawerRight