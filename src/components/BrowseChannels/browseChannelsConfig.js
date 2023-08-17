import Music from './../../assets/channels/best_of_youtube/music.svg';
import Live from './../../assets/channels/best_of_youtube/live.svg';
import News from './../../assets/channels/best_of_youtube/news.svg';
import Sports from './../../assets/channels/best_of_youtube/sports.svg';
import Gaming from './../../assets/channels/best_of_youtube/gaming.svg';

import Comedy1 from './../../assets/channels/comedy/comedy1.svg';
import Comedy2 from './../../assets/channels/comedy/comedy2.svg';
import Comedy3 from './../../assets/channels/comedy/comedy3.svg';
import Comedy4 from './../../assets/channels/comedy/comedy4.svg';
import Comedy5 from './../../assets/channels/comedy/comedy5.svg';

import Cooking1 from './../../assets/channels/cooking/cooking1.svg';
import Cooking2 from './../../assets/channels/cooking/cooking2.svg';
import Cooking3 from './../../assets/channels/cooking/cooking3.svg';
import Cooking4 from './../../assets/channels/cooking/cooking4.svg';

import Fashion1 from './../../assets/channels/fashion/fashion1.svg';
import Fashion2 from './../../assets/channels/fashion/fashion2.svg';
import Fashion3 from './../../assets/channels/fashion/fashion3.svg';
import Fashion4 from './../../assets/channels/fashion/fashion4.svg';
import Fashion5 from './../../assets/channels/fashion/fashion5.svg';

import Music1 from './../../assets/channels/music/music1.svg';
import Music2 from './../../assets/channels/music/music2.svg';
import Music3 from './../../assets/channels/music/music3.svg';
import Music4 from './../../assets/channels/music/music4.svg';

export const bestOfYoutubeConfig = () => {
  return {
    section: 'Best of YouTube',
    divider: true,
    data: [
      {
        title: 'Music',
        details: '119M subscribers',
        icon: Music,
      },
      {
        title: 'Sports',
        details: '75M subscribers',
        icon: Sports,
      },
      {
        title: 'Gaming',
        details: '93.7M subscribers',
        icon: Gaming,
      },
      {
        title: 'News',
        details: '36.3M subscribers',
        icon: News,
      },
      {
        title: 'Live',
        details: '16.2M subscribers',
        icon: Live,
      },
    ],
  };
};

export const fashionConfig = () => {
  return {
    section: 'Beauty & Fashion',
    divider: true,
    data: [
      {
        title: 'Ingrid Nilsen',
        details: '3.47M subscribers',
        icon: Fashion1,
      },
      {
        title: 'Clevver Style',
        details: '3.09M subscribers',
        icon: Fashion2,
      },
      {
        title: 'QrewKicks',
        details: '590K subscribers',
        icon: Fashion3,
      },
      {
        title: 'Brooke Miccio',
        details: '335K subscribers',
        icon: Fashion4,
      },
      {
        title: 'Sage Lescher',
        details: '220K subscribers',
        icon: Fashion5,
      },
    ],
  };
};

export const comedyConfig = () => {
  return {
    section: 'Comedy',
    divider: true,
    data: [
      {
        title: 'BuzzFeedVideo',
        details: '20.1M subscribers',
        icon: Comedy1,
      },
      {
        title: 'Black Nerd Comedy',
        details: '3.09M subscribers',
        icon: Comedy2,
      },
      {
        title: 'Kyoot',
        details: '5.6M subscribers',
        icon: Comedy3,
      },
      {
        title: 'REACT',
        details: '20M subscribers',
        icon: Comedy4,
      },
      {
        title: 'PowerfulJRE',
        details: '15.3M subscribers',
        icon: Comedy5,
      },
    ],
  };
};

export const musicConfig = () => {
  return {
    section: 'Music',
    divider: true,
    data: [
      {
        title: 'Nicki Minaj',
        details: '25.9M subscribers',
        icon: Music1,
      },
      {
        title: 'Rihanna',
        details: '42M subscribers',
        icon: Music2,
      },
      {
        title: 'Ariana Grande',
        details: '52.8M subscribers',
        icon: Music3,
      },
      {
        title: 'EminemMusic',
        details: '57.1M subscribers',
        icon: Music4,
      },
    ],
  };
};

export const cookingConfig = () => {
  return {
    section: 'Cooking & Health',
    divider: false,
    data: [
      {
        title: 'Randy Santel',
        details: '1.63M subscribers',
        icon: Cooking1,
      },
      {
        title: 'Tastemade',
        details: '1.91M subscribers',
        icon: Cooking2,
      },
      {
        title: 'Make Sushi 1',
        details: '1.08M subscribers',
        icon: Cooking3,
      },
      {
        title: 'Keemi',
        details: '899K subscribers',
        icon: Cooking4,
      },
    ],
  };
};
