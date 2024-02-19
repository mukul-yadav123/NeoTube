import {useState,useEffect} from 'react'
import { Box,Typography } from '@mui/material'
import { useParams } from 'react-router'
import { Videos} from './index'
import { fetchFromAPI} from '../utils/fetchFromApi'

const SearchFeed = () => {

  const [videos, setVideos] = useState([])
  const {id} = useParams();
  const searchTerm = id;
  
  useEffect(() => {
    window.scroll(0,0);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then(data => setVideos(data.items));
  },[searchTerm])

  return (
    <Box p={2} sx={{overflowY : 'auto', height: '90vh', flex: 2}}>
    <Typography variant='h4' fontWeight='bold' mb={2}
    sx={{
      color: 'white'
    }}>
      Search Results For:  
      <span style={{color: '#FC1503'}}> {searchTerm} </span> Videos
    </Typography>
      <Videos videos={videos}/>
  </Box>
  )
}

export default SearchFeed