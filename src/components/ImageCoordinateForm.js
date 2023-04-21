import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const ImageCoordinateForm = ()=>{
    const [longitudeStartValue, setLongitudeStartValue] = useState('');
    const [longitudeEndValue, setLongitudeEndValue] = useState('');

    const [latitudeStartValue, setLatitudeStartValue] = useState('');
    const [latitudeEndValue, setLatitudeEndValue] = useState('');
    
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

    const triggerSearch = ()=>{
        console.log("Searching coordinates ", longitudeStartValue,longitudeEndValue,latitudeStartValue,latitudeEndValue)
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
                    <Grid item xs={3}>
                        <TextField id="outlined-basic" label="End" variant="outlined" color="secondary"  sx={{borderColor:'red','& .MuiInputBase-input': {color: 'white',},'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'white',},'&:hover fieldset': {borderColor: 'white',},'&.Mui-focused fieldset': {borderColor: '#f5cedb',},},'& label': {color: 'white',},'& label.Mui-focused': {color: '#f5cedb',},}} size="small" value={longitudeEndValue} onChange={handleLongitudeEndChange}/>
                    </Grid>
                    <Grid item xs={1}>
                        
                    </Grid>
                </Grid>  
            </div>

            <div style={{paddingBottom:'20px'}}>
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
                    <Grid item xs={3}>
                        <TextField id="outlined-basic" label="End" variant="outlined" color="secondary"  sx={{borderColor:'red','& .MuiInputBase-input': {color: 'white',},'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'white',},'&:hover fieldset': {borderColor: 'white',},'&.Mui-focused fieldset': {borderColor: '#f5cedb',},},'& label': {color: 'white',},'& label.Mui-focused': {color: '#f5cedb',},}} size="small" value={latitudeEndValue} onChange={handleLatitudeEndChange}/>
                    </Grid>
                    <Grid item xs={1}>
                        
                    </Grid>
                </Grid>  
            </div>

            <Grid container direction="column" justifyContent='center' sx={{marginTop:"25px"}}> 
                <Grid item sx={{alignItems:'center', justifyContent:'center'}}>
                    <Button variant="contained" onClick={()=>triggerSearch()} sx={{ backgroundColor: 'purple',  color: '#fff','&:hover': {backgroundColor: '#a31545' }, }}>Search</Button>
                </Grid>
            </Grid>

        </div>
    )
}

export default ImageCoordinateForm;