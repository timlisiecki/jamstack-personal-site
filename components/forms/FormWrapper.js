import React, { useEffect } from 'react';

function FormWrapper({ children }) {
	return (
		<div className='mt-16 sm:mt-24 lg:mt-0'>
			<div className='bg-gray-50 dark:bg-regal-900 sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden shadow-lg dark:shadow-lg-white'>
				<div className='px-4 py-8 sm:px-10'>
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
}

export default FormWrapper;
