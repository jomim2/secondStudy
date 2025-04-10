require('dotenv').config();
const axios = require('axios');

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const MAX_RESULTS = 10;

async function getKpopTop10() {
    const searchQuery = 'kpop music';
    const url = `https://www.googleapis.com/youtube/v3/search`;

    try {
        const response = await axios.get(url, {
            params: {
                part: 'snippet',
                q: searchQuery,
                type: 'video',
                maxResults: MAX_RESULTS,
                key: YOUTUBE_API_KEY,
                order: 'viewCount',
                regionCode: 'KR',
            }
        });

        const videos = response.data.items;

        videos.forEach((video, index) => {
            console.log(`${index + 1}. ${video.snippet.title}`);
            console.log(`   https://www.youtube.com/watch?v=${video.id.videoId}\n`);
        });

    } catch (error) {
        console.error('err :', error.message);
    }
}

getKpopTop10();