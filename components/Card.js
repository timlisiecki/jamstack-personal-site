import Button from './Button';

function Card(props) {
	const d = new Date(props.date);
	const formattedDate = d.toLocaleString('en-US', { dateStyle: 'long' });

	return (
		<article className='group flex flex-col rounded-lg shadow-lg dark:shadow-lg-white bg-white dark:bg-regal-900'>
			{props.image && (
				<figure className='flex-shrink-0'>
					<img
						className={`bg-white dark:bg-regal-800 h-48 w-full ${
							props.type === 'book' ? 'object-contain' : 'object-cover'
						} object-top shadow dark:shadow-white group-hover:shadow-lg dark:group:hover:shadow-lg-white rounded-md transform transition group-hover:scale-105`}
						srcSet={`https://${props.image.file.url}?w=400&h=300&fm=webp&q=80 400w, https://${props.image.file.url}?w=800&h=600&fm=webp&q=100 800w`}
						src={`https://${props.image.file.url}?w=400&h=300&fm=webp&q=100`}
						height='300'
						width='400'
						alt={props.image.title}
					/>
				</figure>
			)}

			<div className='flex-1 p-6 flex flex-col justify-between'>
				<div className='flex-1'>
					<p className='text-sm capitalize font-medium text-indigo-600 dark:text-green-300'>{props.type}</p>
					<span className='block mt-2'>
						<p className='text-lg font-semibold text-gray-900 dark:text-white leading-snug tracking-tight'>{props.title}</p>

						{props.author && <p className='mt-3 text-sm text-gray-500 dark:text-gray-300'>{props.author}</p>}

						{props.organization && <p className='mt-3 text-sm text-gray-500 dark:text-gray-300'>{props.organization}</p>}

						{props.date && <p className='mt-3 text-sm text-gray-500 dark:text-gray-300'>{formattedDate}</p>}

						{props.desc && <p className='mt-3 text-sm text-gray-500 dark:text-gray-300'>{props.desc}</p>}
					</span>
				</div>
				<div className='mt-6'>
					<div className='w-full mb-4 flex flex-col md:flex-row justify-around'>
						{props.link && (
							<span className='text-sm sm:flex sm:justify-between'>
								<Button title={`View ${props.type}`} href={props.link} type='primary' size='sm' openNewTab={props.type !== 'blog'} />
							</span>
						)}
						{props.sourceLink && (
							<span className='text-sm font-medium text-gray-900'>
								<Button title='View Code' href={props.sourceLink} type='secondary' size='sm' openNewTab={true} />
							</span>
						)}
					</div>
				</div>
			</div>
		</article>
	);
}

export default Card;
