import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import { Button, TextField } from "@mui/material";

const ImageIDForm = (props)=>{
    const {getResults} = props;
    const [textFieldValue, setTextFieldValue] = useState('');
    const handleTextFieldChange = (event) => {
        setTextFieldValue(event.target.value);
    };
    const triggerSearch = ()=>{
        getResults(textFieldValue,'id')
        console.log("Searching for ", textFieldValue)
    }
    return(
        <div>
            <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                <Grid item xs={7}>
                    <div style={{color:'white'}}>Enter HiRISE image ID: </div>
                </Grid>
                <Grid item xs={5}>
                <TextField id="outlined-basic" label="Image ID" variant="outlined" color="secondary"  sx={{borderColor:'red','& .MuiInputBase-input': {color: 'white',},'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'white',},'&:hover fieldset': {borderColor: 'white',},'&.Mui-focused fieldset': {borderColor: '#f5cedb',},},'& label': {color: 'white',},'& label.Mui-focused': {color: '#f5cedb',},}} size="small" value={textFieldValue} onChange={handleTextFieldChange}/>
                </Grid>
            </Grid>   
                    
                
            <Grid container direction="column" justifyContent='center' sx={{marginTop:"25px"}}> 
                <Grid item sx={{alignItems:'center', justifyContent:'center'}}>
                    <Button variant="contained" onClick={()=>triggerSearch()} sx={{ backgroundColor: 'purple',  color: '#fff','&:hover': {backgroundColor: '#a31545' }, }}>Search</Button>
                </Grid>
            </Grid>    
        </div>
    )
}

export default ImageIDForm;