import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from '../components'
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
    const [channel, setChannel] = useState(null)
    const [videos, setVideos] = useState([])
    const { id } = useParams()
    // console.log(id)

    // console.log(channel, videos)

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
            .then((data) => setChannel(data?.items[0]));

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setVideos(data?.items))
    }, [id])


    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    background: 'linear-gradient(90deg, rgba(0, 238, 247, 1) 0%, rgba(206, 3, 181, 1) 100%, rgba(0, 212, 255, 1) 100%)',
                    zIndex: 100, height: '300px'
                }} />

                <ChannelCard marginTop="-110px" channel={channel} />
            </Box>

            <Box display="flex" p="2">
                <Videos videos={videos} />
            </Box>
        </Box>
    )
}

export default ChannelDetail