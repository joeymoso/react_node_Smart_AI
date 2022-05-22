import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PictureModal from "./Modal";
const FoodItem = (props) => {

    const [open, setOpen] = React.useState(false);

    const data = props.data

    const cardClicked = () => {
        setOpen(true);
      };
    
    const closeModal = () => {
        setOpen(false);
      };

    return (
        <div>
            <Card onClick={cardClicked}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={data.image}
                        alt={data.title}
                    />
                    <CardContent  >
                        <Typography gutterBottom variant="body2" component="div">
                            {data.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <PictureModal open={open} closeModal={closeModal} id={data.id} imageSrc={data.image} title={data.title}/>

        </div>


    );

}

export default FoodItem