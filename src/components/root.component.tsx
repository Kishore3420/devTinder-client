import { Outlet } from 'react-router';
import Navbar from './navbar.component';
import Footer from './footer.component';
const Root = () => {
	return (
		<div className='min-h-screen flex flex-col'>
			<Navbar />
			<main className='flex-1 container mx-auto px-4 sm:px-6 lg:px-8'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Root;
