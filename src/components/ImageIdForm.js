import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import { Button, TextField, Popover, Typography  } from "@mui/material";

const ImageIDForm = (props)=>{
    const {getResults, setResultsPending} = props;
    const [textFieldValue, setTextFieldValue] = useState('');
    const [errorPopoverOpen, setErrorPopoverOpen] = useState(false);
    const handleTextFieldChange = (event) => {
        setTextFieldValue(event.target.value);
      };
    
      const triggerSearch = () => {
        if (textFieldValue.length < 5) {
          setErrorPopoverOpen(true);
        } else {
          //console.log("Id values", textFieldValue)
          setResultsPending(true)
          getResults(textFieldValue, 'id')
        }
      };
    
      const closeErrorPopover = () => {
        setErrorPopoverOpen(false);
      };
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
            <Popover
                open={errorPopoverOpen}
                onClose={closeErrorPopover}
                anchorEl={document.getElementById("outlined-basic")}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                PaperProps={{
                    sx: {
                    backgroundColor: '#050826',
                    border: '2px solid red',
                    boxShadow: 'none',
                    },
                }}
                >
                <Typography sx={{ p: 1, fontSize: '12px', color: 'white', fontWeight: 500 }}>ID length should be at least 5 characters.</Typography>
                </Popover>

                
            <Grid container direction="column" justifyContent='center' sx={{marginTop:"25px"}}> 
                <Grid item sx={{alignItems:'center', justifyContent:'center'}}>
                    <Button variant="contained" onClick={()=>triggerSearch()} sx={{ backgroundColor: 'purple',  color: '#fff','&:hover': {backgroundColor: '#a31545' }, }}>Search</Button>
                </Grid>
            </Grid>    
        </div>
    )
}

export default ImageIDForm;