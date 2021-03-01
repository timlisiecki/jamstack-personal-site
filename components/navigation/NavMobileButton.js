function NavMobileButton({ open, setOpen }) {
	return (
		<button
			onClick={() => setOpen(!open)}
			type='button'
			className='bg-white dark:bg-blue-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-indigo-500'
		>
			<span className='sr-only'>Open menu</span>
			{open ? (
				<svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
				</svg>
			) : (
				<svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
				</svg>
			)}
		</button>
	);
}

export default NavMobileButton;
