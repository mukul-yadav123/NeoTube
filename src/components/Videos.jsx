import { Stack, Box, Skeleton} from "@mui/material"
import {VideoCard,ChannelCard, CardSkeleton} from './index'
import { useEffect } from "react"


const Videos = ({videos,direction}) => {

  // if(videos.length == 0) return <CardSkeleton />;
  // useEffect(() => {
  //   window.scroll(0,0);
  // },[])
  const handleVideos = () => {
    const filterVideos = videos.filter((item) => (
       item?.id?.videoId || item?.id?.channelId
    ))
    
    return filterVideos;
  }
 return (
    <Stack direction={direction || "row"} flexWrap='wrap' gap={2} alignItems='start' justifyContent='start'>
      {handleVideos().map((item,index) => (
       <Box key={index}>
        {item.id.videoId && item.id.channelId}
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      )
      )}
    </Stack>
  )
}

export default Videos