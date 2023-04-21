import React, { useState } from 'react';
import MenuBar from '../components/MenuBar';
import ImageForm from '../components/ImageForm';
import backgroundImage from '../assets/sky2.jpg';
import ResultDisplayer from '../components/ResultsDisplayer';

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
            <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'repeat-y', backgroundSize: 'cover', backgroundPosition: 'center' , paddingTop:'30px'}}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <ImageForm tabVal={tabVal} changeTab={changeTab}/>
                </div>
                <div>
                    <ResultDisplayer />
                </div>
            </div>
           
        </div>
    )
}