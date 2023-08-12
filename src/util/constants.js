const GOOGLE_API_KEY = 'AIzaSyA9QUrkvJVi0aD1D8KHTavas4cNC0qbP98';

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';
