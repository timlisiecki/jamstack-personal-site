import uuid from 'react-uuid';
import WorkRole from './WorkRole';

function WorkHistory({ title, roles }) {
	return (
		<section className='max-w-4xl mx-auto mb-8'>
			<div className='dark:text-white'>
				<h4 className='mb-3'>{title}</h4>
				<div className='flow-root'>
					<div className='-mb-8'>
						{roles.map((role, i) => {
							return (
								<article key={uuid()}>
									<WorkRole
										title={role.fields.jobTitle}
										company={role.fields.companyName}
										companyURL={role.fields.companyLink}
										location={role.fields.location}
										startDate={role.fields.startDate}
										endDate={role.fields.endDate}
										desc={role.fields.description}
										isLastItem={roles.length === i + 1}
									/>
								</article>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default WorkHistory;
