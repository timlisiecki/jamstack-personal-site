import uuid from 'react-uuid';
import EducationOrg from './EducationOrg';

function EducationHistory({ orgs, title }) {
	return (
		<section className='max-w-4xl mx-auto mb-8'>
			<div className='dark:text-white'>
				<h4 className='mb-3'>{title}</h4>
				<div>
					{orgs.map((org) => {
						if (org.fields.educationType === 'University') {
							return (
								<EducationOrg
									key={uuid()}
									title={org.fields.certification}
									org={org.fields.organization}
									link={org.fields.certificationLink}
									endDate={org.fields.endDate}
									location={org.fields.location}
									courses={org.fields.courses ? org.fields.courses : null}
								/>
							);
						}
					})}
				</div>
				<div>
					<h6 className='mb-3'>Professional Development</h6>
					<div>
						{orgs.map((org) => {
							if (org.fields.educationType === 'Professional Development') {
								return (
									<EducationOrg
										key={uuid()}
										title={org.fields.certification}
										org={org.fields.organization}
										link={org.fields.certificationLink}
										endDate={org.fields.endDate}
										location={org.fields.location}
										courses={org.fields.courses ? org.fields.courses : null}
									/>
								);
							}
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default EducationHistory;
