import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import store from './util/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/Watch/WatchPage';
import HomePage from './components/Home/HomePage';
import SearchPage from './components/SearchPage';
import ChannelPage from './components/ChannelPage';
import Shorts from './components/Shorts';
import Subscription from './components/Subscription';
import Library from './components/Library';
import History from './components/History';
import Trending from './components/Trending';
import Shopping from './components/Shopping';
import Music from './components/Music';
import Movies from './components/Movies';
import Live from './components/Live';
import Gaming from './components/Gaming';
import News from './components/News';
import Sports from './components/Sports';
import Learning from './components/Learning';
import Fashion from './components/Fashion';
import BrowseChannels from './components/BrowseChannels/BrowseChannels';

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: 'shorts',
          element: <Shorts />,
        },
        {
          path: 'subscription',
          element: <Subscription />,
        },
        {
          path: 'library',
          element: <Library />,
        },
        {
          path: 'history',
          element: <History />,
        },

        {
          path: 'trending',
          element: <Trending />,
        },
        {
          path: 'Shopping',
          element: <Shopping />,
        },
        {
          path: 'music',
          element: <Music />,
        },
        {
          path: 'movies',
          element: <Movies />,
        },
        {
          path: 'live',
          element: <Live />,
        },
        {
          path: 'gaming',
          element: <Gaming />,
        },
        {
          path: 'news',
          element: <News />,
        },
        {
          path: 'sports',
          element: <Sports />,
        },
        {
          path: 'learning',
          element: <Learning />,
        },
        {
          path: 'fashion',
          element: <Fashion />,
        },
        {
          path: 'feed/guide_builder',
          element: <BrowseChannels />,
        },
        {
          path: 'history',
          element: <History />,
        },

        {
          path: 'watch',
          element: <WatchPage />,
        },
        {
          path: 'channel',
          element: <ChannelPage />,
        },
        {
          path: 'results',
          element: <SearchPage />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

/**
 * Header (Remains intact)
 * Body (/)
 *  - SideBar
 *      - Menu
 *  - Container
 *      - ButtonList
 *      - VideoContainer
 *          - Videos
 * WatchPage (/watch?v=<video_id>)
 *
 *
 */

export default App;
