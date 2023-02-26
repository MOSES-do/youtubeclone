import { Typography, Box, Stack } from '@mui/material'


const CommentBox = ({ comment: { snippet: { topLevelComment: { snippet: { authorProfileImageUrl,
    authorDisplayName, textOriginal, authorChannelUrl } } } }, index }) => (
    <Box key={index} sx={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "30px" }}>
        <Typography variant="h6" sx={{ color: "white", display: "flex", alignItems: "center" }}>
            <img style={{ borderRadius: "50%" }} src={authorProfileImageUrl} alt="comment author profile picture" />
        </Typography>
        <Stack variant="h6" sx={{ color: "white" }}>

            <Box sx={{ marginBottom: "-7px" }}>
                <Typography variant="h6" sx={{ fontSize: '16px', }}>
                    <a style={{ color: "white" }} href={authorChannelUrl}>
                        {authorDisplayName}
                    </a>

                </Typography>

            </Box>
            <Box >
                <Typography variant="h6" sx={{ fontWeight: 100, fontSize: "15px" }}>
                    {textOriginal}
                </Typography>

            </Box>
        </Stack>
    </Box>
)

export default CommentBox;