import React from 'react';
import { Tab, Tabs } from '@mui/material';
import ImageIDForm from './ImageIdForm';
import ImageCoordinateForm from './ImageCoordinateForm';



const ImageForm = (props)=>{
    const {tabVal, changeTab} = props
    return(
        <div style={{ p: 2, border: '2px solid grey', padding: '0px 10px 10px 10px' }}> 
            <div>
                <Tabs
                    value={tabVal}
                    onChange={changeTab}
                    indicatorColor="secondary"
                    >
                    <Tab  label="Single image Analysis" sx={{color:'white',fontWeight:'600','&.Mui-selected': {color: 'white'},}}/>
                    <Tab  label="Large Scale Exploration" sx={{color:'white',fontWeight:'600','&.Mui-selected': {color: 'white'},}}/>
                    <Tab  label="Upload Image for Analysis" disabled sx={{color:'#f5cedb','&.Mui-selected': {color: 'white'},'&.Mui-disabled': {color: '#bdb9bd'}}}/>
                    
                </Tabs>
            </div>
            <div style={{marginTop:'30px', marginBottom: '20px'}}>
                {tabVal==0?<ImageIDForm />:<ImageCoordinateForm />}
            </div>
        </div>
    )
}

export default ImageForm;