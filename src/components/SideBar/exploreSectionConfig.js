import Trending from './../../assets/trending-icon.svg';
import Shopping from './../../assets/shopping-icon.svg';
import Music from './../../assets/music-icon.svg';
import Movies from './../../assets/movies-icon.svg';
import Live from './../../assets/live-icon.svg';
import Gaming from './../../assets/gaming-icon.svg';
import News from './../../assets/news-icon.svg';
import Sports from './../../assets/sports-icon.svg';
import Learning from './../../assets/learning.svg';
import Fashion from './../../assets/fashion-icon.svg';
import Browse from './../../assets/browse-channels-icon.svg';

const exploreSectionConfig = () => {
  return [
    {
      title: 'Trending',
      icon: Trending,
      path: '/trending',
      divider: false,
    },
    {
      title: 'Shopping',
      icon: Shopping,
      path: '/shopping',
      divider: false,
    },
    {
      title: 'Music',
      icon: Music,
      path: '/music',
      divider: false,
    },
    {
      title: 'Movies',
      icon: Movies,
      path: '/movies',
      divider: false,
    },
    {
      title: 'Live',
      icon: Live,
      path: '/live',
      divider: false,
    },
    {
      title: 'Gaming',
      icon: Gaming,
      path: '/gaming',
      divider: false,
    },
    {
      title: 'News',
      icon: News,
      path: '/news',
      divider: false,
    },
    {
      title: 'Sports',
      icon: Sports,
      path: '/sports',
      divider: false,
    },
    {
      title: 'Learning',
      icon: Learning,
      path: '/learning',
      divider: false,
    },
    {
      title: 'Fashion & Beauty',
      icon: Fashion,
      path: '/fashion',
      divider: true,
    },
    {
      title: 'Browse channels',
      icon: Browse,
      path: '/feed/guide_builder',
      divider: true,
    },
  ];
};

export default exploreSectionConfig;
