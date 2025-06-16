import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import Root from './components/root.component';
import Home from './pages/home.page';
import Profile from './pages/profile.page';
import Login from './pages/login.page';
import Register from './pages/register.page';

const router = createBrowserRouter([
	{
		path: '/',
		Component: Root,
		children: [
			{ index: true, Component: Home },
			{ path: 'profile', Component: Profile },
			{
				path: 'auth',
				children: [
					{ path: 'login', Component: Login },
					{ path: 'register', Component: Register },
				],
			},
		],
	},
]);
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
