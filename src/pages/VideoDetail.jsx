import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { Videos } from '../components'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { fontWeight } from '@mui/system'
import { demoProfilePicture } from '../utils/constant'


const VideoDetail = () => {

    const [videos, setVideos] = useState([])
    // console.log(recommendedVideo);
    const [videoDetail, setVideoDetail] = useState(null)
    console.log(videoDetail)
    const { id } = useParams()

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoDetail(data.items[0]));

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setVideos(data.items));

    }, [id])

    // destructure videoDetail
    //Safety clause
    if (!videoDetail?.snippet) return 'Loading...';

    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

    return (
        <Box minHeight='95vh'>
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={3} px={.5}>
                    <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                    </Box>

                    <Typography color="#fff" variant="h5" fontWeight="bold" sx={{ marginTop: "20px" }}>
                        {title}
                    </Typography>

                    <Stack direction="row" justifyContent="space-between" py={1} px={2}>
                        <Link to={videoDetail?.snippet?.channelId ? `/channel/${videoDetail?.snippet?.channelId}` : demoProfilePicture}>
                            <Typography sx={{ color: "#fff", fontWeight: 400 }} variant={{ sm: 'subtitle1', md: 'h6' }}>
                                {channelTitle}
                                <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                            </Typography>
                        </Link>

                        <Stack direction='row' gap='20px' alignItems="center">
                            <Typography variant="body1" sx={{ opacity: 0.7, color: "white" }}>{parseInt(viewCount).toLocaleString()} views</Typography>
                            <Typography variant="body1" sx={{ opacity: 0.7, color: "white" }}>{parseInt(likeCount).toLocaleString()} likes</Typography>
                        </Stack>
                    </Stack>
                </Box>

                <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
                    <Videos videos={videos} direction="column" />
                </Box>
            </Stack>


        </Box >
    )
}

export default VideoDetail