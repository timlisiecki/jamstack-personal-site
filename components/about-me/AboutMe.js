import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function AboutMe(props) {
	return (
		<div className='relative bg-white py-16 sm:py-24'>
			<div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-24 lg:items-start'>
				<div className='relative sm:py-16 lg:py-0'>
					<div aria-hidden='true' className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'>
						<div className='absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72'></div>
						<svg
							className='absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
							width='404'
							height='392'
							fill='none'
							viewBox='0 0 404 392'
						>
							<defs>
								<pattern id='02f20b47-fd69-4224-a62a-4c9de5c763f7' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
									<rect x='0' y='0' width='4' height='4' className='text-gray-200' fill='currentColor' />
								</pattern>
							</defs>
							<rect width='404' height='392' fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)' />
						</svg>
					</div>
					<div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
						{/* <!-- Testimonial card--> */}
						<div className='relative mb-5 -ml-10 rounded-2xl shadow-xl overflow-hidden'>
							<img className='' src={`${props.bioPic.fields.file.url}`} alt='' />
						</div>
						<div className='relative mb-5 -mr-10 rounded-2xl shadow-xl overflow-hidden'>
							<img className='' src={`${props.bioPic.fields.file.url}`} alt='' />
						</div>
					</div>
				</div>

				<div className='relative col-span-2 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
					{/* <!-- Content area --> */}
					<div className='pt-12 prose prose-indigo prose-md md:prose-lg sm:pt-16 lg:pt-20'>
						{/* <h2 className='text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl'>On a mission to empower teams</h2>
						<div className='mt-6 text-gray-500 space-y-6'>
							<p className='text-lg'>
								Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque.
								Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae
								fames senectus vitae.
							</p>
							<p className='text-base leading-7'>
								Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
								Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat
								turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.
							</p>
							<p className='text-base leading-7'>
								Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus
								semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a.
								Morbi enim fermentum lacus in. Viverra.
							</p>
						</div> */}
						{documentToReactComponents(props.longBio)}
					</div>

					{/* <!-- Stats section --> */}
					<div className='mt-10'>
						<dl className='grid grid-cols-2 gap-x-4 gap-y-8'>
							<div className='border-t-2 border-gray-100 pt-6'>
								<dt className='text-base font-medium text-gray-500'>LinkedIn</dt>
								<dd className='text-2xl font-extrabold tracking-tight text-indigo-600 hover:text-indigo-800'>
									<a href={props.linkedInUrl} target='_blank' rel='noopener'>
										Connect with Me
										<span>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-6 w-6'>
												<path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
												<path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
											</svg>
										</span>
									</a>
								</dd>
							</div>

							<div className='border-t-2 border-gray-100 pt-6'>
								<dt className='text-base font-medium text-gray-500'>Github</dt>
								<dd className='text-2xl font-extrabold tracking-tight text-indigo-600 hover:text-indigo-800'>
									<a href={props.githubUrl} target='_blank' rel='noopener'>
										Collaborate with Me
										<span>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-6 w-6'>
												<path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
												<path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
											</svg>
										</span>
									</a>
								</dd>
							</div>

							<div className='border-t-2 border-gray-100 pt-6'>
								<dt className='text-base font-medium text-gray-500'>Freelance</dt>
								<dd className='text-2xl font-extrabold tracking-tight text-indigo-600 hover:text-indigo-800'>
									<a href={props.freelanceUrl} target='_blank' rel='noopener'>
										Hire Me
										<span>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-6 w-6'>
												<path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
												<path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
											</svg>
										</span>
									</a>
								</dd>
							</div>

							<div className='border-t-2 border-gray-100 pt-6'>
								<dt className='text-base font-medium text-gray-500'>Contact</dt>
								<dd className='text-2xl font-extrabold tracking-tight text-indigo-600 hover:text-indigo-800'>
									<a href={`mailto:${props.contactEmailAddress}`}>
										Reach Out to Me{' '}
										<span>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-6 w-6'>
												<path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
												<path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
											</svg>
										</span>
									</a>
								</dd>
							</div>
						</dl>
						<div className='mt-10'>
							<a href='/resume' className='text-base font-medium text-indigo-600 hover:text-indigo-800'>
								{' '}
								Learn more about my experience <span aria-hidden='true'>&rarr;</span>{' '}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
