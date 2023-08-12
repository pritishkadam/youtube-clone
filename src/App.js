import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import store from './util/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';

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
          path: 'watch',
          element: <WatchPage />,
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
