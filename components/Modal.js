function Modal() {
	return (
		<div className={`fixed z-10 inset-0 overflow-y-auto hidden`}>
			<div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
				{/*
                Background overlay, show/hide based on modal state.

                Entering: "ease-out duration-300"
                From: "opacity-0"
                To: "opacity-100"
                Leaving: "ease-in duration-200"
                From: "opacity-100"
                To: "opacity-0"
                    */}
				<div className='fixed inset-0 transition-opacity' aria-hidden='true'>
					<div className='absolute inset-0 bg-gray-500 opacity-75' />
				</div>
				{/* This element is to trick the browser into centering the modal contents. */}
				<span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
					​
				</span>
				{/*
                Modal panel, show/hide based on modal state.

                Entering: "ease-out duration-300"
                From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                To: "opacity-100 translate-y-0 sm:scale-100"
                Leaving: "ease-in duration-200"
                From: "opacity-100 translate-y-0 sm:scale-100"
                To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    */}
				<div
					className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'
					role='dialog'
					aria-modal='true'
					aria-labelledby='modal-headline'
				>
					<div className='block absolute top-0 right-0 pt-4 pr-4'>
						<button
							type='button'
							className='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							<span className='sr-only'>Close</span>
							{/* Heroicon name: outline/x */}
							<svg
								className='h-6 w-6'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								aria-hidden='true'
							>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
							</svg>
						</button>
					</div>

					<div>
						<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Contact</h2>
						<p className='my-2 text-center text-sm text-gray-600'>
							Feel free to reach out to me and I will get back to you at my earliest convenience.
						</p>
					</div>

					<form
						name='contact'
						className='space-y-6'
						method='POST'
						data-netlify='true'
						netlify-honeypot='bot-field'
						data-netlify-recaptcha='true'
					>
						<input type='hidden' name='contact-form' value='contact' />
						<div className='hidden'>
							<label>
								Don’t fill this out if you’re human: <input name='bot-field' />
							</label>
						</div>
						<div>
							<div className='flex justify-between'>
								<label htmlFor='email' className='block text-sm font-medium text-gray-700'>
									Your Name
								</label>
							</div>
							<div className='mt-1 relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<svg className='h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
										<path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
									</svg>
								</div>
								<input
									type='text'
									name='name'
									id='name'
									className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md'
									placeholder='Please enter your full name'
									required
								/>
							</div>
						</div>

						<div>
							<div className='flex justify-between'>
								<label htmlFor='email' className='block text-sm font-medium text-gray-700'>
									Email
								</label>
								<span className='text-sm text-gray-500' id='email-optional'>
									Required
								</span>
							</div>
							<div className='mt-1 relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<svg
										className='h-5 w-5 text-gray-400'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
										fill='currentColor'
										aria-hidden='true'
									>
										<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
										<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
									</svg>
								</div>
								<input
									type='text'
									name='email'
									id='email'
									className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md'
									placeholder='you@example.com'
									required
								/>
							</div>
						</div>
						<div>
							<div className='flex justify-between'>
								<label htmlFor='email' className='block text-sm font-medium text-gray-700'>
									Subject
								</label>
							</div>
							<div className='mt-1 relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<svg className='h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
										<path
											fillRule='evenodd'
											d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
											clipRule='evenodd'
										/>
									</svg>
								</div>
								<input
									type='text'
									name='subject'
									id='subject'
									className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md'
									placeholder='Please enter the subject of your message'
									required
								/>
							</div>
						</div>
						<div>
							<label htmlFor='about' className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'>
								Message
							</label>
							<div className='mt-1 sm:mt-0'>
								<p className='mb-2 text-sm text-gray-500'>Please ensure that your message is as descriptive as possible.</p>
								<textarea
									id='about'
									name='about'
									rows={3}
									className='max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md'
									defaultValue={''}
									required
								/>
							</div>
						</div>
						<div data-netlify-recaptcha='true'></div>
						<div>
							<button
								type='submit'
								className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Modal;
