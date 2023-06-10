import { Button, Grid, TextField, Popover, Typography } from "@mui/material";
import React, { useState } from "react";

const ImageCoordinateForm = (props)=>{
    const {getResults,setResultsPending} = props;
    const [longitudeStartValue, setLongitudeStartValue] = useState('');
    const [longitudeEndValue, setLongitudeEndValue] = useState('');

    const [latitudeStartValue, setLatitudeStartValue] = useState('');
    const [latitudeEndValue, setLatitudeEndValue] = useState('');

    const [errorLatPopoverOpen, setErrorLatPopoverOpen] = useState(false);
    const [latError, setLatError] = useState('');

    const [errorLongPopoverOpen, setErrorLongPopoverOpen] = useState(false);
    const [longError, setLongError] = useState('');
    
    const handleLongitudeStartChange = (event) => {
        setLongitudeStartValue(event.target.value);
    };
    const handleLongitudeEndChange = (event) => {
        setLongitudeEndValue(event.target.value);
    };

    const handleLatitudeStartChange = (event) => {
        setLatitudeStartValue(event.target.value);
    };
    const handleLatitudeEndChange = (event) => {
        setLatitudeEndValue(event.target.value);
    };

    const closeErrorLatPopover = () => {
        setErrorLatPopoverOpen(false);
        setLatError("")
      };

      const closeErrorLongPopover = () => {
        setErrorLongPopoverOpen(false);
        setLongError("")
      };

    const triggerSearch = ()=>{
        var noError = true
        var latStart= parseInt(latitudeStartValue)
        var latEnd = parseInt(latitudeEndValue)
        var longStart= parseInt(longitudeStartValue)
        var longEnd = parseInt(longitudeEndValue)
        if(latStart<-90 || latStart>90){
            noError = false;
            setLatError("Invalid latitude range. (should be between -90 and 90)")
            setErrorLatPopoverOpen(true);
        }
        if(latEnd<-90 || latEnd>90){
            noError = false;
            setLatError("Invalid latitude range. (should be between -90 and 90)")
            setErrorLatPopoverOpen(true);
        }
        if(latStart>=latEnd){
           //console.log(latitudeStartValue,latitudeEndValue)
            noError = false;
            setLatError("Latitude start value should be less than latitiude end value.")
            setErrorLatPopoverOpen(true);
        }

        if(longStart<0 || longStart>360){
            noError = false;
            setLongError("Invalid longitude range. (should be between 0 and 360)")
            setErrorLongPopoverOpen(true);
        }
        if(longEnd<0 || longEnd>360){
            noError = false;
            setLongError("Invalid longitude range. (should be between 0 and 360)")
            setErrorLongPopoverOpen(true);
        }
        if(longStart>=longEnd){
            noError = false;
            setLongError("Longitude start value should be less than longitude end value.")
            setErrorLongPopoverOpen(true);
        }
        
        if(noError==true){
            setResultsPending(true)
            const coordinates = {
                "latitude_beginning":latitudeStartValue,
                "latitude_ending":latitudeEndValue,
                "longitude_beginning":longitudeStartValue,
                "longitude_ending":longitudeEndValue
            }
        
            getResults(coordinates,"coordinate")
        }
        
    }

    return (
        <div>
            <div style={{paddingBottom:'20px'}}>
                <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                    <Grid item xs={4}>
                        <div style={{color:'white'}}>Longitude: </div>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField id="outlined-basic" label="Start" variant="outlined" size="small" color="secondary"  sx={{borderColor:'red','& .MuiInputBase-input': {color: 'white',},'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'white',},'&:hover fieldset': {borderColor: 'white',},'&.Mui-focused fieldset': {borderColor: '#f5cedb',},},'& label': {color: 'white',},'& label.Mui-focused': {color: '#f5cedb',},}} value={longitudeStartValue} onChange={handleLongitudeStartChange}/>
                    </Grid>
                    <Grid item xs={1}>
                        <div style={{color:'white'}}>to </div>
                    </Grid>
                    <Grid id="longitude" item xs={3}>
                        <TextField id="outlined-basic" label="End" variant="outlined" color="secondary"  sx={{borderColor:'red','& .MuiInputBase-input': {color: 'white',},'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'white',},'&:hover fieldset': {borderColor: 'white',},'&.Mui-focused fieldset': {borderColor: '#f5cedb',},},'& label': {color: 'white',},'& label.Mui-focused': {color: '#f5cedb',},}} size="small" value={longitudeEndValue} onChange={handleLongitudeEndChange}/>
                    </Grid>
                    <Grid item xs={1}>
                        
                    </Grid>
                </Grid>  
            </div>
            <Popover
                open={errorLongPopoverOpen}
                onClose={closeErrorLongPopover}
                anchorEl={document.getElementById("longitude")}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                  }}
                PaperProps={{
                    sx: {
                    backgroundColor: '#050826',
                    border: '2px solid red',
                    boxShadow: 'none',
                    },
                }}
                >
                <Typography sx={{ p: 1, fontSize: '12px', color: 'white', fontWeight: 500 }}>{longError}</Typography>
                </Popover>

            <div  style={{paddingBottom:'20px'}}>
                <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                    <Grid item xs={4}>
                        <div style={{color:'white'}}>Latitude: </div>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField id="outlined-basic" label="Start" variant="outlined" color="secondary"  sx={{borderColor:'red','& .MuiInputBase-input': {color: 'white',},'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'white',},'&:hover fieldset': {borderColor: 'white',},'&.Mui-focused fieldset': {borderColor: '#f5cedb',},},'& label': {color: 'white',},'& label.Mui-focused': {color: '#f5cedb',},}} size="small" value={latitudeStartValue} onChange={handleLatitudeStartChange}/>
                    </Grid>
                    <Grid item xs={1}>
                        <div style={{color:'white'}}>to </div>
                    </Grid>
                    <Grid id="latitude" item xs={3}>
                        <TextField id="outlined-basic" label="End" variant="outlined" color="secondary"  sx={{borderColor:'red','& .MuiInputBase-input': {color: 'white',},'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'white',},'&:hover fieldset': {borderColor: 'white',},'&.Mui-focused fieldset': {borderColor: '#f5cedb',},},'& label': {color: 'white',},'& label.Mui-focused': {color: '#f5cedb',},}} size="small" value={latitudeEndValue} onChange={handleLatitudeEndChange}/>
                    </Grid>
                    <Grid item xs={1}>
                        
                    </Grid>
                </Grid>  
            </div>

            <Popover
                open={errorLatPopoverOpen}
                onClose={closeErrorLatPopover}
                anchorEl={document.getElementById("latitude")}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                  }}
                PaperProps={{
                    sx: {
                    backgroundColor: '#050826',
                    border: '2px solid red',
                    boxShadow: 'none',
                    },
                }}
                >
                <Typography sx={{ p: 1, fontSize: '12px', color: 'white', fontWeight: 500 }}>{latError}</Typography>
                </Popover>

            <Grid container direction="column" justifyContent='center' sx={{marginTop:"25px"}}> 
                <Grid item sx={{alignItems:'center', justifyContent:'center'}}>
                    <Button variant="contained" onClick={()=>triggerSearch()} sx={{ backgroundColor: 'purple',  color: '#fff','&:hover': {backgroundColor: '#a31545' }, }}>Search</Button>
                </Grid>
            </Grid>

        </div>
    )
}

export default ImageCoordinateForm;