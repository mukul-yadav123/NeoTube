import {useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import ReactPlayer from 'react-player';
import { Typography,Box,Stack,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';


import { Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromApi';
import ChannelSmallDetails from './ChannelSmallDetails';
import LoadingBar from 'react-top-loading-bar';

const VideoDetail = () => {
  const [videoDetail,setVideoDetail] = useState(null)
  const [progress,setProgress] = useState(0)
  const [videos,setVideos] = useState([])
  const {id} = useParams();
  
  useEffect(() => {
    window.scroll(0,0);
    setProgress(30)
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then(data => setVideoDetail(data?.items[0]))
    setProgress(50)
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then(data =>setVideos(data?.items))
    setProgress(100)
  },[id])

  
  if(!videoDetail?.snippet) return <LoadingBar progress={progress}/>;


  const {snippet: {title,channelId,channelTitle}, statistics : {viewCount,likeCount}} = videoDetail;
  

  // console.log(channelDetail?.snippet);


  return (
    <Box minHeight='95vh'>
      {/* <LoadingBar progress={progress}/> */}
    <Stack direction={{xs: 'column',md: 'row'}}>
      <Box flex={1}>
        <Box sx={{width : '100%',position: 'sticky',top: '86px'}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
          <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
            {title}
          </Typography>
          <ChannelSmallDetails channelId={channelId} id={id} channelDetail={[channelTitle,viewCount,likeCount]}/>
        </Box>
      </Box>
    <Box px={2} py={{md: 1,xs: 5}} justifyContent='center' alignItems='center'>
    <Videos videos={videos} direction="column"/>
    </Box>
    </Stack>
    </Box>
  )
}

export default VideoDetail