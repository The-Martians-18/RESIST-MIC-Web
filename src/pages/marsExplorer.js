import React, { useEffect, useState } from 'react';
import MenuBar from '../components/MenuBar';
import ImageForm from '../components/ImageForm';
import backgroundImage from '../assets/sky2.jpg';
import axios from 'axios';
import ResultDisplayer from '../components/ResultsDisplayer';
import { Box, CircularProgress } from '@mui/material';
import Lottie from "lottie-react";
//import satelliteSignal from "../assets/loading-satellite.json";
import satelliteSignal from "../assets/satelliteNew.json";

const resultArray = [
    {image:'../assets/ESP_072116_1740_RED.jpg',
    id:'ESP_011443_1380',
    name:'Isidis Basin Ejecta',
    latitude:'15.7°',
    longitude:'20.5°'
  },
  {image:'../assets/ESP_072116_1740_RED.jpg',
    name:'Isidis Basin Ejecta',
    id:'ESP_011443_1380',
    latitude:'15.7°',
    longitude:'20.5°'
  },
  {image:'../assets/ESP_072116_1740_RED.jpg',
    name:'Isidis Basin Ejecta',
    id:'ESP_011443_1380',
    latitude:'15.7°',
    longitude:'20.5°'
  },
  {image:'../assets/ESP_072116_1740_RED.jpg',
    name:'Isidis Basin Ejecta',
    id:'ESP_011443_1380',
    latitude:'15.7°',
    longitude:'20.5°'
  },
  {image:'../assets/ESP_072116_1740_RED.jpg',
    name:'Isidis Basin Ejecta',
    id:'ESP_011443_1380',
    latitude:'15.7°',
    longitude:'20.5°'
  },
  {image:'../assets/ESP_072116_1740_RED.jpg',
    name:'Isidis Basin Ejecta',
    id:'ESP_011443_1380',
    latitude:'15.7°',
    longitude:'20.5°'
  },
  {image:'../assets/ESP_072116_1740_RED.jpg',
    name:'Isidis Basin Ejecta',
    id:'ESP_011443_1380',
    latitude:'15.7°',
    longitude:'20.5°'
  },
  {image:'../assets/ESP_072116_1740_RED.jpg',
    name:'Isidis Basin Ejecta',
    id:'ESP_011443_1380',
    latitude:'15.7°',
    longitude:'20.5°'
  },
  {image:'../assets/ESP_072116_1740_RED.jpg',
    name:'Isidis Basin Ejecta',
    id:'ESP_011443_1380',
    latitude:'15.7°',
    longitude:'20.5°'
  },
  {image:'../assets/ESP_072116_1740_RED.jpg',
    name:'Isidis Basin Ejecta',
    id:'ESP_011443_1380',
    latitude:'15.7°',
    longitude:'20.5°'
  },
  {image:'../assets/ESP_072116_1740_RED.jpg',
    name:'Isidis Basin Ejecta',
    id:'ESP_011443_1380',
    latitude:'15.7°',
    longitude:'20.5°'
  },
  {image:'../assets/ESP_072116_1740_RED.jpg',
    name:'Isidis Basin Ejecta',
    id:'ESP_011443_1380',
    latitude:'15.7°',
    longitude:'20.5°'
  }
]



export default function MarsExplorer(){
    const [tabVal, setTabVal] = useState(0);
    const [results, setResults] = useState([]);
    const [imageLoaded, setImageLoaded] = useState(false); // Add state for image loading status

    const changeTab = (event, newValue) => {
        setTabVal(newValue);
    };

    const defaultOptions = {
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice' // Set the preserveAspectRatio value as per your requirement
      }
    };

    const getResults = () => {
        console.log("getting results");
        setResults(resultArray);
        const data = {
            method: 'GET',
            url: 'http://localhost:3001/filters',
        };
        axios
            .request(data)
            .then((response) => {
                // const results = Object.keys(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleImageLoad = () => {
      setTimeout(() => {
        setImageLoaded(true);
      }, 1000);
        
    }

    useEffect(() => {
        const image = new Image();
        image.src = backgroundImage;
        image.onload = handleImageLoad;
    }, []); // Add empty dependency array to ensure effect only runs once

    return (
        <div>
            <div>
                <MenuBar />
            </div>
            {imageLoaded ? ( // Render content only when image is loaded
                <div style={{ backgroundImage: `url(${backgroundImage})`,height: results.length === 0 ? '100vh' : '100%', backgroundRepeat: 'repeat-y', backgroundSize: 'cover', backgroundPosition: 'center' , paddingTop:'30px'}}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <ImageForm tabVal={tabVal} changeTab={changeTab} getResults={getResults}/>
                    </div>
                    <div>
                        <ResultDisplayer results={results}/>
                    </div>
                </div>
            ) : (
                <div style={{ display: 'flex', justifyContent: 'center', background:'#050826', alignItems: 'center', height: '100vh' }}>
                    <Box sx={{ display: 'flex' }}>
                      <Lottie animationData={satelliteSignal} options={defaultOptions}/>;
                    </Box>
                </div>
            )}
        </div>
    )
}
