import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import store from './util/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/Watch/WatchPage';
import HomePage from './components/Home/HomePage';
import SearchPage from './components/SearchPage/SearchPage';
import ChannelPage from './components/ChannelPage';
import Shorts from './components/Shorts';
import Subscription from './components/Subscription';
import Library from './components/Library';
import History from './components/History';
import Live from './components/Live/Live';
import BrowseChannels from './components/BrowseChannels/BrowseChannels';
import Trending from './components/Categories/Trending';
import Shopping from './components/Categories/Shopping';
import Music from './components/Categories/Music';
import Movies from './components/Categories/Movies';
import Gaming from './components/Categories/Gaming';
import News from './components/Categories/News';
import Sports from './components/Categories/Sports';
import Learning from './components/Categories/Learning';
import Fashion from './components/Categories/Fashion';

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
          path: 'shopping',
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
