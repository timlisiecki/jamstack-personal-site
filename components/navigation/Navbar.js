import React, { useState } from 'react';
import ToggleDarkMode from './ToggleDarkMode';
import NavLink from './NavLink';
import NavDropdown from './NavDropdown';
import NavDropdownLink from './NavDropdownLink';
import NavMobileButton from './NavMobileButton';
import NavMobileMenu from './NavMobileMenu';

function Navbar() {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	return (
		<header className='lg:sticky lg:top-0 z-10'>
			<div className='relative bg-white dark:bg-regal-800 shadow dark:shadow-white'>
				<div className='relative flex justify-between items-center px-4 py-4 sm:px-6 md:justify-start md:space-x-10'>
					<div>
						<a href='/' className='flex'>
							{/* <img className='h-8 w-auto sm:h-8' src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg' alt='' /> */}
							<span className='ml-2 self-center uppercase font-bold text-indigo-600 dark:text-green-300 text-2xl'>Tim Lisiecki</span>
						</a>
					</div>

					<div className='-mr-2 -my-2 lg:hidden'>
						<NavMobileButton open={openMobileMenu} setOpen={setOpenMobileMenu} />
					</div>
					{/* <!--
						Mobile menu, show/hide based on mobile menu state.

						Entering: "duration-200 ease-out"
						From: "opacity-0 scale-95"
						To: "opacity-100 scale-100"
						Leaving: "duration-100 ease-in"
						From: "opacity-100 scale-100"
						To: "opacity-0 scale-95"
					--> */}
					<div
						className={`absolute lg:static top-16 inset-x-0 z-50 p-10 lg:p-0 transition-opacity transition-scale transform origin-top-right md:flex-1 md:flex md:items-center md:justify-between bg-white dark:bg-regal-800 shadow lg:shadow-none ${
							!openMobileMenu ? 'hidden' : ''
						}`}
					>
						<nav className='flex flex-col lg:flex-row space-y-5 lg:space-x-10 lg:space-y-0 mb-5 lg:mb-0'>
							<NavLink title='About' url='/about' />
							<NavLink title='Portfolio' url='/portfolio' />
							<NavLink title='Resume' url='/resume' />
							<NavLink title='Blog' url='/blog' />
							<NavDropdown title='Resources'>
								<NavDropdownLink title='View All Resources' url='/resources' desc='View all courses, books, and other resources.' />
								<NavDropdownLink
									title='Courses'
									url='/resources?filter=courses'
									desc='Courses I have taken to learn web and software development, as well as professional development.'
								/>
								<NavDropdownLink title='Books' url='/resources?filter=books' desc='Books that have helped me in my career.' />
								{/* <NavDropdownLink
									title='Other Resources'
									url='/resources?filter=other'
									desc='Discover helpful links and other resources related to web and software development.'
								/> */}
							</NavDropdown>
						</nav>
						<div className='flex flex-col lg:flex-row items-center md:ml-12'>
							<ToggleDarkMode />
							<a
								href='#'
								className='mx-auto my-4 lg:my-0 lg:ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white dark:text-regal-800 bg-indigo-600 dark:bg-green-300 hover:bg-indigo-700 dark:hover:bg-green-400'
							>
								Contact
							</a>
						</div>
					</div>
				</div>

				{/* <NavMobileMenu open={openMobileMenu} setOpen={setOpenMobileMenu} /> */}
			</div>
		</header>
	);
}

export default Navbar;
