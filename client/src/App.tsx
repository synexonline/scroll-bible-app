import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { JourneyPage } from './pages/JourneyPage';
import { ScenePage } from './pages/ScenePage';
import { ProfilePage } from './pages/ProfilePage';

const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/explore', element: <ExplorePage /> },
      { path: '/journey/:journeyId', element: <JourneyPage /> },
      { path: '/journey/:journeyId/:chapterId/:sceneOrder', element: <ScenePage /> },
      { path: '/profile', element: <ProfilePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
