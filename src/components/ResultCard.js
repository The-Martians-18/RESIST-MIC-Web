import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import axios from 'axios';
import ImageModal from "./ImageModal";

const ResultCard = (props)=>{
    const {image, name, latitude, longitude, id, index,setResults, results, setModalPending} = props;
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setModalPending(true)
        const url = "http://127.0.0.1:8000/image/"+id
        const data = {
            method: 'GET',
            url: url,
            responseType: 'blob',
        };
        const updatedResults = [...results];
        if(!updatedResults[index]["imageReceived"]){
            axios
            .request(data)
            .then((response) => {
                const imageUrl = URL.createObjectURL(response.data);
                updatedResults[index]["thumbnailLink"] = imageUrl;
                updatedResults[index]["imageReceived"] = true;
                setResults(updatedResults);
                setOpen(true);
                setModalPending(false)
            })
            .catch((error) => {
                console.error(error);
            });
        }else{
            setOpen(true);
            setModalPending(false)
        }
        
        
      };
    return(
        <div style={{border:'2px solid gray'}}>
            <Card sx={{ width: 345, height:250, background:'#e3e1f7' }} onClick={handleClickOpen}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="100"
                    image={image}
                    alt="HiRISE Image"
                    />
                    <CardContent >
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
            <ImageModal open={open} setOpen={setOpen} name={name} id={id} hirise={image} longitude={longitude} latitude={latitude}/>
        </div>
    )
}

export default ResultCard;