import uuid from 'react-uuid';
import WorkRole from './WorkRole';

function WorkHistory({ roles }) {
	return (
		<div className='max-w-4xl mx-auto mb-8'>
			<h4>Experience</h4>
			<div className='flow-root'>
				<ul className='-mb-8'>
					{roles.map((role, i) => {
						return (
							<li key={uuid()}>
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
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default WorkHistory;
