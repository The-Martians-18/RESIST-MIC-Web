import React from 'react';
import backgroundImage from '../assets/back1.jpg';
import logo from '../assets/resist-l.png';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Home(){
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop:'10px', paddingRight:'10px' }}>
                <img
                    src={logo} // Replace with the URL or local path of your image
                    alt="Logo" // Add an alt text for accessibility
                    style={{ width: '150px', height: 'auto' }} // Specify the size and any additional styles for the image
                />
            </div>
            <div style={{fontSize:"40px", paddingTop:'6%', paddingLeft:'45%', color:'white', textAlign:'left', paddingBottom:'20px',textShadow: '1px 1px 0 #aa647b, -1px -1px 0 #aa647b, 1px -1px 0 #aa647b, -1px 1px 0 #aa647b'}}>
                WELCOME,
            </div>
            <div style={{fontSize:"30px", paddingLeft:'45%', color:'white', textAlign:'left', paddingBottom:'10px',textShadow: '1px 1px 0 #aa647b, -1px -1px 0 #aa647b, 1px -1px 0 #aa647b, -1px 1px 0 #aa647b'}}>
                Revolutionize Your Mars Image Analysis with RESIST! 
            </div>
            <div style={{fontSize:"30px", paddingLeft:'45%', color:'white', textAlign:'left', paddingBottom:'20px',textShadow: '1px 1px 0 #aa647b, -1px -1px 0 #aa647b, 1px -1px 0 #aa647b, -1px 1px 0 #aa647b'}}>
                Say Goodbye to Manual Segmentation and Hello to Efficient and Precise Results. Explore Mars Like Never Before with Our Cutting-edge Tool!
            </div>
            <div style={{fontSize:"30px", paddingLeft:'45%', textAlign:'left'}}>
                <Link to="/mars_explorer">
                    <Button variant="contained" sx={{ backgroundColor: '#f50057',fontWeight: '700', fontSize:'16px', color: '#fff','&:hover': {backgroundColor: '#a31545' }, }}>
                        Get Started
                    </Button>
                </Link>
            </div>
        </div>
    )
}