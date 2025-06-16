import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import Root from './components/root.component';
import Home from './pages/home.page';
import Profile from './pages/profile.page';
const router = createBrowserRouter([
	{
		path: '/',
		Component: Root,
		children: [
			{ index: true, Component: Home },
			{ path: 'profile', Component: Profile },
		],
	},
]);
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
