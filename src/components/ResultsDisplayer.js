import React, { useState } from "react";
import ResultCard from "./ResultCard";
import Pagination from '@mui/material/Pagination';
import { Grid } from "@mui/material";

const ResultDisplayer = (props) => {
  const {results,setResults,setModalPending} = props
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
        
      <Grid container direction="row" alignItems="center" justifyContent="center" spacing={10} sx={{ padding: '50px 5% 30px 5%' }}>
        {imagesToDisplay.map((result,index) => (
          <Grid item key={index}> {/* assuming each result item has an unique id */}
            <ResultCard index={index} image={result.thumbnailLink} id={result.image_id} name={result.title} latitude={result.latitude} longitude={result.longitude} setResults={setResults} results={results} setModalPending={setModalPending}/>
          </Grid>
        ))}
      </Grid>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center", paddingBottom:'20px'}}>
        {results.length>0?<Pagination
            count={Math.ceil(results.length / imagesPerPage)}
            page={currentPage}
            variant="outlined"
            onChange={handlePageChange}
            sx={{ "& .MuiPaginationItem-root": {color: "white", background:'#a31545','&.Mui-selected': {background:'purple'}}}}
        />:null}
      </div>
      
    </div>
  );
}

export default ResultDisplayer;
