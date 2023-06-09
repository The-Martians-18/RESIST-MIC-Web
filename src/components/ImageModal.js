import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { Grid } from '@mui/material';
import axios from 'axios';

import Lottie from "lottie-react";
//import animationRobotWork from "../assets/animationRobotWork.json";
import animationRobotWork from "../assets/low-earth.json";
import imageProcessing from "../assets/image-scanning.json";
//import mask from '../assets/ESP_072116_1740_RED_mask.png';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ImageModal(props) {
  const {open, setOpen, name, id,hirise, longitude, latitude} = props;
  const [mask, setMask]= React.useState("")
  const [showMask, setShowMask]= React.useState(false)
  const [maskAvailable, setMaskAvailable]= React.useState(false)
  const [isMaskGenerating, setIsMaskGenerating]= React.useState(false)
  const handleClose = () => {
    setOpen(false);
  };
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = hirise;
    link.download = 'HiRISE_image.jpg';
    link.click();
  };

  const handleMask = () => {
    const link = document.createElement('a');
    link.href = mask;
    link.download = 'generated_Mask.jpg';
    link.click();
  };

  const maskHide = () => {
    setShowMask(!showMask)
  };
  const generateMask = () => {
    console.log("Generating Mask")
    const url = "http://127.0.0.1:8000/imageseg/"+id
    const data = {
      method: 'GET',
      url: url,
      responseType: 'blob',
    };

    setIsMaskGenerating(true)

    axios
      .request(data)
      .then((response) => {
          const imageUrl = URL.createObjectURL(response.data);
          setMaskAvailable(true);
          setIsMaskGenerating(false);
          setShowMask(!showMask)
          setMask(imageUrl)
      })
      .catch((error) => {
          console.error(error);
          setIsMaskGenerating(false);
    });
        
    
    
  };
  return (
    <div >
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        
        fullWidth
      >
        <div style={{ background:'#e3e1f7'}}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {name} : {id}
        </BootstrapDialogTitle>
        <DialogContent >
            <Grid container direction="row" alignContent='center' justifyContent='center' spacing={4}>
                <Grid item xs={7}>
                <div style={{ position: 'relative', display:'flex',alignItems:"center",justifyContent:"center" }}>
                    <img
                        src={hirise}
                        alt="HiRISE Image" 
                        width="100%" height="auto"
                    />
                    {showMask==true?<img
                        src={mask}
                        alt="Mask Image"
                        style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width:"100%", height:"auto"
                        //opacity: 0.5, // Set the desired opacity for the mask image
                        }}
                    />:null}
                    </div>
                    </Grid>
                    <Grid item xs={5}>
                        <div style={{paddingBottom:'10px'}}>
                            <div style={{fontWeight:600}}>
                                Name:
                            </div>
                            <div>
                                {name}
                            </div>
                        </div>

                        <div style={{paddingBottom:'10px'}}>
                            <div style={{fontWeight:600}}>
                                ID:
                            </div>
                            <div>
                                {id}
                            </div>
                        </div>
                            
                        
                        <div style={{paddingBottom:'10px'}}>
                            <div style={{fontWeight:600}}>
                                Longitude:
                            </div>
                            <div>
                                {longitude}
                            </div>
                        </div>

                        <div style={{paddingBottom:'10px'}}>
                            <div style={{fontWeight:600}}>
                                Latitude:
                            </div>
                            <div>
                                {latitude}
                            </div>
                        </div>

                        <div style={{marginTop: '30px', display:'flex',alignItems:"center",justifyContent:"center"}}>
                            {maskAvailable==false?
                                <Button variant='contained' disabled={isMaskGenerating == true?true:false} onClick={()=>generateMask()} sx={{ backgroundColor: 'purple',  color: '#fff','&:hover': {backgroundColor: '#a31545' }, }}>
                                    {showMask==false && isMaskGenerating == false ? "Generate Mask":"Generating....."}
                                </Button>:
                                <Button variant='contained' onClick={()=>maskHide()} sx={{ backgroundColor: 'purple',  color: '#fff','&:hover': {backgroundColor: '#a31545' }, }}>
                                    {showMask==false ? "Show Mask":"Hide Mask"}
                                </Button>
                            }
                            
                        </div>
                        <div style={{paddingTop:'10px'}}>
                          <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid>
                              <Button size="small" variant="outlined" startIcon={<DownloadForOfflineIcon />} onClick={handleDownload}>
                                HiRISE 
                              </Button>
                            </Grid>

                            <Grid>
                              <Button size="small" variant="outlined" startIcon={<DownloadForOfflineIcon />} onClick={handleMask} disabled={showMask==true?false:true}>
                                Mask 
                              </Button>
                            </Grid>
                              
                          </Grid>
                        </div>
                        {isMaskGenerating==true?(         
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <Lottie style={{ height: '150px' }} animationData={imageProcessing} />
                            </div>
                    
                        
                        
                        ):(null)}
                        
                
                        
                    </Grid>
            </Grid>
          
          
        </DialogContent>
        </div>
      </BootstrapDialog>
    </div>
  );
}