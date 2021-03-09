import { useState } from 'react';

function SortAndFilterInputs() {
	return (
		<div className='mt-5'>
			<span className='mr-3 text-gray-900 dark:text-white'>
				Sort By:
				<span className='relative z-0 ml-3 inline-flex shadow-sm rounded-md'>
					<button
						type='button'
						className='relative inline-flex items-center px-2 py-1 rounded-l-md border border-gray-300 dark:border-regal-900 bg-white dark:bg-regal-800 dark:hover:bg-regal-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-green-300 focus:border-indigo-500 dark:focus:border-green-400'
					>
						Most Recent
					</button>
					{/* <button
						type='button'
						className='-ml-px relative inline-flex items-center px-2 py-1 border border-gray-300 dark:border-regal-900 bg-white dark:bg-regal-800 dark:hover:bg-regal-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-green-300 focus:border-indigo-500 dark:focus:border-green-400'
					>
						A-Z
					</button> */}
					<button
						type='button'
						className='-ml-px relative inline-flex items-center px-2 py-1 rounded-r-md border border-gray-300 dark:border-regal-900 bg-white dark:bg-regal-800 dark:hover:bg-regal-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-green-300 focus:border-indigo-500 dark:focus:border-green-400'
					>
						A-Z
					</button>
				</span>
			</span>
			<span className='mr-3 text-gray-900 dark:text-white'>
				Filter By:
				<span className='relative z-0 ml-3 inline-flex shadow-sm rounded-md'>
					<button
						type='button'
						className='relative inline-flex items-center px-2 py-1 rounded-l-md border border-gray-300 dark:border-regal-900 bg-white dark:bg-regal-800 dark:hover:bg-regal-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-green-300 focus:border-indigo-500 dark:focus:border-green-400'
					>
						Books
					</button>
					{/* <button
						type='button'
						className='-ml-px relative inline-flex items-center px-2 py-1 border border-gray-300 dark:border-regal-900 bg-white dark:bg-regal-800 dark:hover:bg-regal-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-green-300 focus:border-indigo-500 dark:focus:border-green-400'
					>
						Months
					</button> */}
					<button
						type='button'
						className='-ml-px relative inline-flex items-center px-2 py-1 rounded-r-md border border-gray-300 dark:border-regal-900 bg-white dark:bg-regal-800 dark:hover:bg-regal-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-green-300 focus:border-indigo-500 dark:focus:border-green-400'
					>
						Courses
					</button>
				</span>
			</span>
		</div>
	);
}

export default SortAndFilterInputs;
