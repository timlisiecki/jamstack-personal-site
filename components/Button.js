import PropTypes from 'prop-types';

function Button(props) {
	let buttonColors;
	let buttonSize;

	if (props.type === 'primary') {
		buttonColors = 'text-white dark:text-blue-900 bg-indigo-600 dark:bg-green-300 hover:bg-indigo-700 dark:hover:bg-green-400';
	} else if (props.type === 'secondary') {
		buttonColors = 'text-indigo-600 bg-white dark:bg-indigo-100 hover:bg-gray-50 dark:hover:bg-indigo-300';
	}

	switch (props.size) {
		case 'sm':
			buttonSize = 'px-4 py-0.5 text-sm md:py-1 md:px-4';
			break;
		case 'base':
			buttonSize = 'px-6 py-1 text-base md:py-2 md:px-6';
			break;
		case 'lg':
			buttonSize = 'px-8 py-3 text-base md:py-4 md:text-lg md:px-10';
			break;
	}

	return (
		<div className='rounded-md shadow'>
			<a
				href={props.href}
				className={`w-full flex items-center justify-center  border border-transparent font-medium rounded-md  ${buttonColors} ${buttonSize}`}
				target={props.openNewTab ? '_blank' : '_self'}
			>
				{props.title}
			</a>
		</div>
	);
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	href: PropTypes.string,
	type: PropTypes.string,
	size: PropTypes.string,
	openNewTab: PropTypes.bool,
};

export default Button;
