import uuid from 'react-uuid';

function Skills({ skills }) {
	return (
		<section className='max-w-4xl mx-auto mb-8'>
			<div className='dark:text-white'>
				<h4>Skills</h4>
				<div className='flex flex-wrap'>
					{skills.map((skill) => {
						return (
							<span
								key={uuid()}
								className='p-1 mb-1 ml-1 bg-gray-100 dark:bg-regal-700 hover:bg-gray-200 dark:hover:bg-regal-600 cursor-pointer rounded-sm'
							>
								{skill.fields.tagName}
							</span>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Skills;
