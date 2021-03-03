function NavDropdownLink(props) {
	return (
		<a href={props.url} className='-m-3 p-3 block rounded-md hover:bg-gray-50 dark:hover:bg-regal-700'>
			<p className='text-base font-medium text-gray-900 dark:text-white'>{props.title}</p>
			<p className='mt-1 text-sm text-gray-500 dark:text-gray-300'>{props.desc}</p>
		</a>
	);
}

export default NavDropdownLink;
