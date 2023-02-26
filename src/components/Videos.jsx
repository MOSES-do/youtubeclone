import { Box, Stack } from '@mui/material'
import { VideoCard, ChannelCard } from './'


const Videos = ({ videos, direction }) => {
    //Safetyclause just incase videos does not load in props as expected
    //Direction is a style prop to add extra styling wherever video component is called if needed
    if (!videos.length) return 'Loading...';


    return (
        <Stack direction={direction || "row"} flexWrap="wrap" gap={2} justifyContent="center" sx={{ color: "white", width: '100%', margin: '0 auto' }}>
            {videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channel={item} />}
                </Box>
            ))}
        </Stack>
    )

}



export default Videos;