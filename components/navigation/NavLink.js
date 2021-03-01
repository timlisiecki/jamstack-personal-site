function NavLink(props) {
	return (
		<a href={props.url} className='text-base font-medium text-gray-500 dark:text-white hover:text-indigo-600 dark:hover:text-green-300'>
			{props.title}
		</a>
	);
}

export default NavLink;
