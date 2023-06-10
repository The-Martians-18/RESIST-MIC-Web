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

export default function MarsExplorer(){
    const [tabVal, setTabVal] = useState(0);
    const [results, setResults] = useState([]);
    const [resultsPending, setResultsPending] = useState(false);
    const [modalPending, setModalPending] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(true); // Add state for image loading status

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

    const getResults = (queryData, queryType) => {
        console.log("getting results");
        // setResults(resultArray);
        const url = "http://127.0.0.1:8000/image/"+queryData
        if(queryType=='id'){
          const data = {
            method: 'GET',
            url: url,
            responseType: 'blob',
        };
        axios
            .request(data)
            .then((response) => {
                const imageUrl = URL.createObjectURL(response.data);
                //console.log(response)
                const detailUrl = "http://127.0.0.1:8000/imagedetails/"+queryData
                const detailRequest = {
                  method: 'GET',
                  url: detailUrl,
                  
              };
                axios
                  .request(detailRequest)
                  .then((res) => {
                    const details = (res.data)
                    //console.log(details)
                    setResults([{thumbnailLink:imageUrl,
                      title:details.title,
                      image_id:details.image_id,
                      latitude:details.latitude,
                      longitude:details.longitude,
                      imageReceived:true}]);
                      setResultsPending(false)
                  });
                
            })
            .catch((error) => {
                console.error(error);
                setResultsPending(false)
            });
        }
        else if (queryType=='coordinate'){
          const data = {
            method: 'POST',
            url: 'http://127.0.0.1:8000/images/',
            data:queryData
           
        };
        console.log("data here")
        axios
            .request(data)
            .then((response) => {
                const results = response.data.images
                console.log(results.length, results)
                setResults(results)
                setResultsPending(false)
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }

    const handleImageLoad = () => {
      setImageLoaded(true);
        
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
            <div>
              <div style={{ backgroundImage: `url(${backgroundImage})`,height: results.length === 0 ? '100vh' : '100%', backgroundRepeat: 'repeat-y', backgroundSize: 'cover', backgroundPosition: 'center' , paddingTop:'30px', transition: modalPending? 'background-color 0.5s' : 'none', backgroundColor: modalPending? 'rgba(0, 0, 0, 0.5)' : 'transparent',filter: modalPending ? 'blur(3px)' : 'none'              }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <ImageForm tabVal={tabVal} changeTab={changeTab} getResults={getResults} setResultsPending={setResultsPending}/>
                    </div>
                    <div>
                      {resultsPending?
                        <div style={{ display: 'flex', justifyContent: 'center',  alignItems: 'center', paddingTop:'100px' }}>
                            <Box >
                              <Lottie animationData={satelliteSignal} options={defaultOptions}/>;
                            </Box>
                        </div>:
                        <div>
                            <ResultDisplayer results={results} setResults={setResults} setModalPending={setModalPending}/>
                            
                        </div>
                      
                      }
                    </div>
                </div>
              {modalPending ? 
                <div style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <Box >
                    <Lottie animationData={satelliteSignal} options={defaultOptions}/>;
                  </Box>
                </div>
                :null
              }
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
