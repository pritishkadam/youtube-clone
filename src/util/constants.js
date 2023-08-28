const GOOGLE_API_KEY = 'AIzaSyA9QUrkvJVi0aD1D8KHTavas4cNC0qbP98';

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_VIDEOS_URL = `https://www.googleapis.com/youtube/v3/videos?part=id,snippet,contentDetails,statistics,player&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key=${GOOGLE_API_KEY}&q=`;

export const YOUTUBE_CHANNEL_API = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=CHANNEL_ID&key=${GOOGLE_API_KEY}`;
// export const YOUTUBE_CHANNEL_API = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=CHANNEL_ID&fields=items%2Fsnippet%2Fthumbnails&key=${GOOGLE_API_KEY}`;

export const VIDEO_CATEGORIES = `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_LIVE_API = `https://www.googleapis.com/youtube/v3/search?part=snippet,id&type=video&maxResults=6&relevanceLanguage=EN&regionCode=IN&key=${GOOGLE_API_KEY}&eventType=`
// export const YOUTUBE_CHANNEL_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,id,contentDetails,brandingSettings,contentOwnerDetails,statistics,items&id=CHANNEL_ID&key=${GOOGLE_API_KEY}`

// Music
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&chart=mostPopular&regionCode=IN&maxResults=50&videoCategoryId=10&key=AIzaSyA9QUrkvJVi0aD1D8KHTavas4cNC0qbP98

//live videos page

// https://www.googleapis.com/youtube/v3/search?part=snippet,id&type=video&eventType=completed&maxResults=6&relevanceLanguage=EN&regionCode=IN&key=AIzaSyA9QUrkvJVi0aD1D8KHTavas4cNC0qbP98
