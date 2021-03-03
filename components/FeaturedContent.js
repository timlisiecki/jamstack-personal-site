import uuid from 'react-uuid';
import Card from '../components/Card';
import Button from './Button';

function FeaturedContent(props) {
	return (
		<div className='relative bg-gray-50 dark:bg-regal-700 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
			<div className='absolute inset-0'>
				<div className='bg-white dark:bg-regal-800 h-1/3 sm:h-2/3'></div>
			</div>
			<div className='relative max-w-7xl mx-auto'>
				<div className='text-center'>
					<h2 className='text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl'>{props.content.title}</h2>
					<p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4'>{props.content.description}</p>
				</div>
				<div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
					{props.content.content.map((project) => {
						return (
							<Card
								key={uuid()}
								type={project.sys.contentType.sys.id}
								title={project.fields.title}
								desc={project.fields.description}
								image={project.fields.banner.fields}
								link={project.fields.link}
								sourceLink={project.fields.sourceCodeLink}
							/>
						);
					})}
				</div>
				<div className='mt-10 sm:flex sm:justify-center'>
					<Button title='View All Projects' href='/portfolio' type='primary' size='base' />
				</div>
			</div>
		</div>
	);
}

export default FeaturedContent;
