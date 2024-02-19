import { Link } from "react-router-dom"
import { Typography,Card, CardContent,CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"




const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  return (
    <>
      <Link to={`/video/${videoId}`}>
    <CardMedia
    sx={{width: {
      xs: '100%', sm:'350px'
    },height: '200px'}}
    alt={snippet?.title}
    image={snippet?.thumbnails?.high?.url }/>
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
      <Link to={`/video/${videoId}`}>
        <Typography variant="subtitle1" fontWeight='bold' color='#fff' >
        {snippet?.title.slice(0,20) }
        </Typography>
      </Link>
      <Link to={`/channel/${snippet?.channelId}`}>
        <Typography variant="subtitle2" fontWeight='bold' color='gray'>
          {snippet?.channelTitle.slice(0,40)}
          <CheckCircle sx={{fontSize: 12, color: 'gray',ml: '5px'}}/>
        </Typography>
      </Link>
      </CardContent>
    </>
  )
}

export default VideoCard