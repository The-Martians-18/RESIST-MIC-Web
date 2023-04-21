import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import immage from '../assets/ESP_072116_1740_RED.jpg';

import ImageModal from "./ImageModal";

const ResultCard = (props)=>{
    const {image, name, latitude, longitude, id} = props;
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    return(
        <div style={{border:'2px solid gray'}}>
            <Card sx={{ maxWidth: 345 }} onClick={handleClickOpen}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="100"
                    image={immage}
                    alt="green iguana"
                    />
                    <CardContent sx={{ background:'#e3e1f7'}}>
                    <div style={{fontWeight:500, fontSize:'20px'}}>
                        Name: {name}
                    </div>
                    <div style={{fontWeight:500, fontSize:'18px'}}>
                        ID: {id}
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        Latitude: {latitude}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Longitude: {longitude}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <ImageModal open={open} setOpen={setOpen} name={name} id={id} hirise={immage} longitude={longitude} latitude={latitude}/>
        </div>
    )
}

export default ResultCard;