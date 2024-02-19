import { useState,useEffect } from "react"
import { useParams } from "react-router"
import { Box } from "@mui/material"

import {Videos, ChannelCard} from './index'
import { fetchFromAPI } from "../utils/fetchFromApi"
import LoadingBar from "react-top-loading-bar"

const ChannelDetail = () => {
  const [channelDetail,setChannelDetail] = useState(null)
  const [videos,setVideos] = useState([])
  const [progress,setProgress] = useState(0)
  const {id} = useParams();

  useEffect(() => {
    setProgress(30);
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then(data => setChannelDetail(data?.items[0]));
    setProgress(70);
    
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then(data => setVideos(data?.items));
    setProgress(100);
  },[id]);

  if(!videos.length) return 'Loadinng...';
  return (
    <Box minHeight='95vh'>
      <LoadingBar progress={progress}/>
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(75,217,167,1) 22%, rgba(44,172,198,1) 52%)',
      zIndex:10,
      height: '300px'}}/>
      <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{marginRight: {xs: '100%',sm: '200px'}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail