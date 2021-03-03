import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../utils/themeContext';

function ToggleDarkMode(props) {
	const { theme, setTheme } = useContext(ThemeContext);
	const [state, setState] = useState();

	useEffect(() => {
		setState(theme === 'dark');
	}, []);

	const switchTheme = () => {
		setState(!state);
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<button
			onClick={switchTheme}
			type='button'
			aria-pressed='false'
			className='relative inline-flex flex-shrink-0 my-4 lg:my-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-indigo-500 bg-indigo-600 dark:bg-green-300 dark:focus:ring-green-300'
		>
			<span className='sr-only'>Dark Mode setting</span>
			<span
				className={`pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-regal-800 shadow transform ring-0 transition ease-in-out duration-200 ${
					state ? 'translate-x-5' : 'translate-x-0'
				}`}
			>
				{/* <!-- On: "opacity-0 ease-out duration-100", Off: "opacity-100 ease-in duration-200" --> */}
				<span
					className={`${
						state ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200'
					} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
					aria-hidden='true'
				>
					<svg className='bg-white dark:bg-regal-800 h-3 w-3 text-indigo-600 dark:text-green-300' viewBox='0 0 20 20' fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
							clipRule='evenodd'
						/>
					</svg>
				</span>
				{/* <!-- On: "opacity-100 ease-in duration-200", Off: "opacity-0 ease-out duration-100" --> */}
				<span
					className={`${
						state ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'
					} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
					aria-hidden='true'
				>
					<svg className='bg-white dark:bg-regal-800 h-3 w-3 text-indigo-600 dark:text-green-300' fill='currentColor' viewBox='0 0 24 24'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
						/>
					</svg>
				</span>
			</span>
		</button>
	);
}

export default ToggleDarkMode;
