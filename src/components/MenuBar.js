import React from 'react';
import AppBar from '@mui/material/AppBar';
import logo from '../assets/resist-no.png';
import Lottie from "lottie-react";
import satelliteSignal from "../assets/satelliteNew.json";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';



function MenuBar(){
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice' // Set the preserveAspectRatio value as per your requirement
    }
  };
    return(
        <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, background:'#301b70' }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}> 
          <div style={{ width: '65px', height: '65px' }}>
            <Lottie animationData={satelliteSignal} options={defaultOptions}/>;
          </div>
        
          <div style={{ display: 'flex', justifyContent: 'flex-start'}}>
            <a href="/">
              <img
                  src={logo} // Replace with the URL or local path of your image
                  alt="Logo" // Add an alt text for accessibility
                  style={{ width: 'auto', height: '35px' }} // Specify the size and any additional styles for the image
              />
            </a>
          </div>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, textAlign:'left', color: '#f8bbd0', paddingLeft: '10px'}}>
            for Martian Inverted Channels
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5, color:'#f5cedb' }}
            >
              More Details
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5,color:'#f5cedb' }}
            >
              About Us
            </Link>
            
          </nav>
          
        </Toolbar>
      </AppBar>
    )
}

export default MenuBar;