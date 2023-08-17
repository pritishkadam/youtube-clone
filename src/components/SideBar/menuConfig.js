import Home from './../../assets/home-button-icon.svg';
import Shorts from './../../assets/shorts-icon.svg';
import Subscriptions from './../../assets/subscription-icon.svg';
import Library from './../../assets/library-icon.svg';
import History from './../../assets/history-icon-2.svg';

const menuConfig = () => {
  return [
    {
      title: 'Home',
      icon: Home,
      path: '/',
      divider: false,
    },
    {
      title: 'Shorts',
      icon: Shorts,
      path: '/shorts',
      divider: false,
    },
    {
      title: 'Subscriptions',
      icon: Subscriptions,
      path: '/subscription',
      divider: true,
    },
    {
      title: 'Library',
      icon: Library,
      path: '/library',
      divider: false,
    },
    {
      title: 'History',
      icon: History,
      path: '/history',
      divider: true,
    },
  ];
};

export default menuConfig;
