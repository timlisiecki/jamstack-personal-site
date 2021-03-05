import { useState } from 'react';

function SortAndFilterInputs() {
	return (
		<div>
			<span>
				Sort By:
				<span className='relative z-0 inline-flex shadow-sm rounded-md'>
					<button
						type='button'
						className='relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
					>
						Most Recent
					</button>
					{/* <button
						type='button'
						className='-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
					>
						A-Z
					</button> */}
					<button
						type='button'
						className='-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
					>
						A-Z
					</button>
				</span>
			</span>
			<span>
				Filter By:
				<span className='relative z-0 inline-flex shadow-sm rounded-md'>
					<button
						type='button'
						className='relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
					>
						Books
					</button>
					{/* <button
						type='button'
						className='-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
					>
						Months
					</button> */}
					<button
						type='button'
						className='-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
					>
						Courses
					</button>
				</span>
			</span>
		</div>
	);
}

export default SortAndFilterInputs;
