import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constant'
import { decode } from 'html-entities'



const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    // console.log(video);
    // console.log(videoId, snippet);
    return (
        <Card sx={{ width: { xs: '100%', sm: '250px', md: "400", xl: "800" }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: "100%", height: 140 }}

                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '100px' }} >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#fff" sx={{ width: { xs: "350px", sm: "100%" } }}>
                        {decode(snippet?.title.slice(0, 60)) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant="subtitle2" fontWeight="normal" color="gray">
                        {decode(snippet?.channelTitle.slice(0, 60)) || demoChannelTitle.slice(0, 60)}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}



export default VideoCard;