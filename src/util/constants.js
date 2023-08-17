const GOOGLE_API_KEY = 'AIzaSyA9QUrkvJVi0aD1D8KHTavas4cNC0qbP98';

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

// export const YOUTUBE_CHANNEL_API = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=CHANNEL_ID&fields=items%2Fsnippet%2Fthumbnails&key=${GOOGLE_API_KEY}`;

export const VIDEO_CATEGORIES = `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_CHANNEL_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,id,contentDetails,brandingSettings,contentOwnerDetails,statistics&id=CHANNEL_ID&key=${GOOGLE_API_KEY}`
