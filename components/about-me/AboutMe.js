import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ContactInfo from './ContactInfo';

function AboutMe(props) {
	return (
		<section className='relative bg-white dark:bg-regal-800 py-16 sm:py-12'>
			<div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-24 lg:items-start'>
				<div className='relative sm:py-16 lg:py-0'>
					<div aria-hidden='true' className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'>
						<div className='absolute inset-y-0 right-1/2 w-full bg-gray-50 dark:bg-regal-700 rounded-r-3xl lg:right-72'></div>
						<svg
							className='absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
							width='404'
							height='392'
							fill='none'
							viewBox='0 0 404 392'
						>
							<defs>
								<pattern id='02f20b47-fd69-4224-a62a-4c9de5c763f7' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
									<rect x='0' y='0' width='4' height='4' className='text-gray-200 dark:text-regal-700' fill='currentColor' />
								</pattern>
							</defs>
							<rect width='404' height='392' fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)' />
						</svg>
					</div>
					<div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
						{/* <!-- Testimonial card--> */}
						<div className='relative mb-5 lg:-ml-10 rounded-2xl shadow-xl overflow-hidden'>
							<img className='' src={`https://${props.otherPic.fields.file.url}`} alt='' />
						</div>
						<div className='relative mb-5 lg:-mr-10 lg:-mt-20 rounded-2xl shadow-xl overflow-hidden'>
							<img className='' src={`https://${props.bioPic.fields.file.url}`} alt='' />
						</div>
					</div>
				</div>

				<div className='relative col-span-2 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
					{/* <!-- Content area --> */}
					<article className='pt-12 prose dark:prose-dark prose-md md:prose-lg sm:pt-16 lg:pt-20'>
						{documentToReactComponents(props.longBio)}
					</article>

					<ContactInfo linkedInUrl={props.linkedInUrl} githubUrl={props.githubUrl} freelanceUrl={props.freelanceUrl} />
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
