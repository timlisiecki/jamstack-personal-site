import uuid from 'react-uuid';
import Button from './Button';

function Card(props) {
	return (
		<div className='group flex flex-col rounded-lg shadow-lg dark:shadow-lg-white bg-white dark:bg-regal-800'>
			{props.image && (
				<div className='flex-shrink-0'>
					<img
						className={`bg-white dark:bg-regal-800 h-48 w-full ${
							props.type === 'book' ? 'object-contain' : 'object-cover'
						} object-top shadow dark:shadow-white group-hover:shadow-lg dark:group:hover:shadow-lg-white rounded-md transform transition group-hover:scale-105`}
						height='300'
						width='400'
						srcSet={`https://${props.image.file.url}?w=400&h=300&fm=webp&q=80 400w, https://${props.image.file.url}?w=800&h=600&fm=webp&q=80 800w`}
						src={`https://${props.image.file.url}?w=400&h=300&fm=webp&q=80`}
						alt={props.image.file.title}
					/>
				</div>
			)}

			<div className='flex-1 p-6 flex flex-col justify-between'>
				<div className='flex-1'>
					<p className='text-sm capitalize font-medium text-indigo-600 dark:text-green-300'>{props.type}</p>
					<span className='block mt-2'>
						<p className='text-xl font-semibold text-gray-900 dark:text-white'>{props.title}</p>

						{props.author && <p className='mt-3 text-base text-gray-500 dark:text-gray-300'>{props.author}</p>}

						{props.organization && <p className='mt-3 text-base text-gray-500 dark:text-gray-300'>{props.organization}</p>}

						{props.date && <p className='mt-3 text-base text-gray-500 dark:text-gray-300'>{props.date}</p>}

						{props.desc && <p className='mt-3 text-base text-gray-500 dark:text-gray-300'>{props.desc}</p>}
					</span>
				</div>
				<div className='mt-6'>
					<div className='w-full mb-4 flex flex-col md:flex-row justify-around'>
						<span className='text-sm sm:flex sm:justify-between'>
							<Button title={`View ${props.type}`} href={props.link} type='primary' size='sm' openNewTab={props.type !== 'blog'} />
						</span>
						{props.sourceLink && (
							<span className='text-sm font-medium text-gray-900'>
								<Button title='View Code' href={props.sourceLink} type='secondary' size='sm' openNewTab={true} />
							</span>
						)}
					</div>

					{props.tags && (
						<div className='flex flex-wrap space-x-1 text-sm text-gray-500 dark:text-gray-300'>
							Tags:{' '}
							{props.tags.map((tag) => {
								return (
									<span key={uuid()}>
										<small className='bg-gray-100 dark:bg-regal-700 hover:bg-gray-200 dark:hover:bg-regal-600 cursor-pointer p-1 mb-1 rounded-sm'>
											{tag.fields.tagName}
										</small>
									</span>
								);
							})}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Card;
