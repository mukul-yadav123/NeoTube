import { CardMedia, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromApi'
import { CheckCircle } from '@mui/icons-material'

const ChannelSmallDetails = ({channelId,id,channelDetail}) => {
    const [channelDetails,setChannelDetails] = useState(null)
    useEffect(()=>{
        fetchFromAPI(`channels?part=snippet&id=${channelId}`)
        .then(data => setChannelDetails(data?.items[0]));
      },[id])
      console.log(channelDetails)
     
  return (
    <Stack direction='row' justifyContent='space-between' sx={{color: '#fff'}} px={1}>
    <Link to={`/channel/${channelId}`}>
   <CardMedia
  sx={{borderRadius: '50%',height: '50px', width: '50px'
  ,marginBottom: 2, border: '1px solid #e3e3e3',float:'left'}}
    image={channelDetails?.snippet?.thumbnails?.high?.url }/> 
      <Typography variant={{sm: 'subtitle1', md: 'h6'}} color='#fff' sx={{position:'relative',top:'15px',left:'10px'}}>
        {channelDetail[0]}
        <CheckCircle sx={{fontSize: '15px', color: 'gray',ml: '5px',position: 'relative',top: '3px'}}/>
      </Typography>
    </Link>
    <Stack direction='row' gap='20px' alignItems='center'>
      <Typography variant='body1' sx={{opacity: 0.7}}>
        {parseInt(channelDetail[1]).toLocaleString()} views
      </Typography>
      <Typography variant='body1' sx={{opacity: 0.7}}>
        {parseInt(channelDetail[2]).toLocaleString()} Likes
      </Typography>
    </Stack>
  </Stack>
  )
}

export default ChannelSmallDetails