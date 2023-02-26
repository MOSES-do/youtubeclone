import { Link } from 'react-router-dom'
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../utils/constant'



const ChannelCard = ({ channel }) => {
    // console.log(channel);
    return (
        <Link to={channel?.id?.channelId ? `/channel/${channel?.id?.channelId}` : demoVideoUrl}>
            <Box sx={{
                boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: { xs: '356px', md: '320px' }, height: '326px', margin: 'auto'
            }}>
                <CardContent sx={{ display: 'flex', flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#fff" }} >
                    <CardMedia
                        image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channel?.snippet?.title}
                        sx={{ width: 180, height: 180, borderRadius: "50%", mb: 2, border: '1px solid #e3e3e3' }}
                    />
                    <Typography variant="h6" fontWeight="normal" color="gray">
                        {channel?.snippet?.channelTitle}
                        <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
                    </Typography>
                    {channel?.statistics?.subscriberCount && (
                        <Typography>
                            {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Box >
        </Link >
    )
}

export default ChannelCard;