import React, { useState } from 'react';
import MenuBar from '../components/MenuBar';
import ImageForm from '../components/ImageForm';
import backgroundImage from '../assets/sky2.jpg';

export default function MarsExplorer(){
    const [tabVal, setTabVal] = useState(0);
    const changeTab = (event, newValue) => {
        setTabVal(newValue);
      };
    return (
        <div>
            <div>
                <MenuBar />
            </div>
            <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' , paddingTop:'30px'}}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <ImageForm tabVal={tabVal} changeTab={changeTab}/>
                </div>
            </div>
        </div>
    )
}