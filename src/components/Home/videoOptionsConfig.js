import addToQueue from './../../assets/add-to-queue.svg';
import download from './../../assets/download.svg';
import share from './../../assets/share.svg';

const videoCardOptions = () => {
  return [
    {
      title: 'Add to queue',
      icon: addToQueue,
    },
    {
      title: 'Download',
      icon: download,
    },
    {
      title: 'Share',
      icon: share,
    },
  ];
};

export default videoCardOptions;
