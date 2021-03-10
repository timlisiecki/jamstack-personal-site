import uuid from 'react-uuid';
import EducationOrg from './EducationOrg';

function EducationHistory({ orgs, title, courses }) {
	const coursesObj = (courses) => {
		const obj = {};
		courses.map((course) => {
			if (!obj.hasOwnProperty(course.fields.organization.sys.id)) {
				obj[course.fields.organization.sys.id] = [];
			}

			return obj[course.fields.organization.sys.id].push(course);
		});

		return obj;
	};
	const orgCourses = coursesObj(courses);

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
									courses={orgCourses.hasOwnProperty(org.sys.id) ? orgCourses[org.sys.id] : null}
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
										courses={orgCourses.hasOwnProperty(org.sys.id) ? orgCourses[org.sys.id] : null}
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
