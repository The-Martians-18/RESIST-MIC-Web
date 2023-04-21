import React, { useState } from "react";
import ResultCard from "./ResultCard";
import Pagination from '@mui/material/Pagination';

import { Grid } from "@mui/material";

const results = [
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



const ResultDisplayer = () => {
  // State to keep track of the current page number
  const [currentPage, setCurrentPage] = useState(1);

  // Number of images to display per page
  const imagesPerPage = 9

  // Calculate the index of the first and last image to display
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;

  // Slice the results array based on the first and last image index
  const imagesToDisplay = results.slice(indexOfFirstImage, indexOfLastImage);

  // Function to handle page change
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
        
      <Grid container direction="row" alignItems="center" justifyContent="center" spacing={5} sx={{ padding: '50px 10% 30px 10%' }}>
        {imagesToDisplay.map((result,index) => (
          <Grid item key={index}> {/* assuming each result item has an unique id */}
            <ResultCard image={result.image} id={result.id} name={result.name} latitude={result.latitude} longitude={result.longitude} />
          </Grid>
        ))}
      </Grid>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center", paddingBottom:'20px'}}>
        <Pagination
            count={Math.ceil(results.length / imagesPerPage)}
            page={currentPage}
            variant="outlined"
            onChange={handlePageChange}
            sx={{ "& .MuiPaginationItem-root": {color: "white", background:'#a31545','&.Mui-selected': {background:'purple'}}}}
        />
      </div>
      
    </div>
  );
}

export default ResultDisplayer;
