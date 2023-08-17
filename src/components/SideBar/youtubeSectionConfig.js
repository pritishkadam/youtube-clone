import YouTubePremium from './../../assets/premium-icon.svg';
import YouTubeMusic from './../../assets/youtube-music-icon.svg';
import YouTubeKids from './../../assets/youtube-kids-icon.svg';

const youtubeSectionConfig = () => {
  return [
    {
      title: 'YouTube Premium',
      icon: YouTubePremium,
      divider: false,
    },
    {
      title: 'YouTube Music',
      icon: YouTubeMusic,
      divider: false,
    },
    {
      title: 'YouTube Kids',
      icon: YouTubeKids,
      divider: true,
    },
  ];
};

export default youtubeSectionConfig;
