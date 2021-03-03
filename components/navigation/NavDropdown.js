import { useState } from 'react';
import PropTypes from 'prop-types';
import { Transition } from '@headlessui/react';

function NavDropdown(props) {
	const [dropdown, setDropdown] = useState(false);

	return (
		<div className='relative'>
			<button
				onClick={() => setDropdown(!dropdown)}
				// onBlur={() => setDropdown(false)}
				type='button'
				className={`group bg-white dark:bg-regal-800 lg:bg-transparent rounded-md ${
					dropdown ? 'text-indigo-600 dark:text-green-300' : 'text-gray-500 dark:text-white'
				} inline-flex items-center text-base font-medium hover:text-indigo-600 dark:hover:text-green-300 focus:outline-none dark:focus:ring-green-300`}
			>
				<span>{props.title}</span>
				<svg
					className={`ml-2 h-5 w-5 ${
						dropdown ? 'text-indigo-600 dark:text-green-300' : 'text-gray-400 dark:text-white'
					} group-hover:text-indigo-600 dark:group-hover:text-green-300`}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					aria-hidden='true'
				>
					<path
						fillRule='evenodd'
						d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
						clipRule='evenodd'
					/>
				</svg>
			</button>

			<Transition
				show={dropdown}
				enter='transition ease-out duration-200'
				enterFrom='opacity-0 translate-y-1'
				enterTo='opacity-100 translate-y-0'
				leave='transition ease-in duration-150'
				leaveFrom='opacity-100 translate-y-0'
				leaveTo='opacity-0 translate-y-1'
			>
				<div className='lg:absolute z-10 lg:left-1/2 lg:transform lg:-translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0'>
					<div className='rounded-lg shadow-inner dark:shadow-inner-white lg:shadow-lg dark:lg:shadow-lg-white ring-1 ring-black ring-opacity-5 overflow-hidden '>
						<div className='relative grid gap-6 bg-white dark:bg-regal-800 px-5 py-6 sm:gap-4 sm:p-8'>{props.children}</div>
					</div>
				</div>
			</Transition>
		</div>
	);
}

NavDropdown.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default NavDropdown;
