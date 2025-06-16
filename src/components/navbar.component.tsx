import { NavLink } from 'react-router';

const Navbar = () => {
	return (
		<nav className='navbar bg-base-100 shadow-sm px-5'>
			<div className='flex-1'>
				<NavLink className='btn btn-ghost text-xl' to='/'>
					DevTinder
				</NavLink>
			</div>
			<div className='flex gap-2'>
				<div className='dropdown dropdown-end'>
					<div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
						<div className='w-10 rounded-full'>
							<img
								alt='Tailwind CSS Navbar component'
								src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
							/>
						</div>
					</div>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
					>
						<li>
							<NavLink className='justify-between' to='/profile'>
								Profile
								<span className='badge'>New</span>
							</NavLink>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
