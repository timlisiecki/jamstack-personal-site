import { fetchEntry } from '../utils/contentfulEntries';
import uuid from 'react-uuid';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Layout from '../layouts/Main';
import PageHeader from '../components/PageHeader';
import WorkHistory from '../components/experience/WorkHistory';
import EducationOrg from '../components/experience/EducationOrg';

export default function Resume({ resume }) {
	return (
		<Layout>
			<Head>
				<title>{resume.title} | Tim Lisiecki</title>
				<meta name='description' content='Tim Lisiecki is a Front End Developer based in Boston, MA.' />
			</Head>
			<PageHeader title='Resume' phrase='Experience is key' desc='But is it really work if you love what you do?' />
			<div className='max-w-4xl mx-auto mb-8'>
				<div className='dark:text-white'>
					<h4 className='mb-3'>Summary</h4>
					<div>
						<ReactMarkdown>{resume.summary}</ReactMarkdown>
					</div>
				</div>
			</div>
			<div className='max-w-4xl mx-auto mb-8'>
				<div className='dark:text-white'>
					<h4>Skills</h4>
					<div className='flex flex-wrap'>
						{resume.skills.map((skill) => {
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
			</div>
			<WorkHistory title='Experience' roles={resume.employmentHistory} />
			<div className='max-w-4xl mx-auto mb-8'>
				<div className='dark:text-white'>
					<h4 className='mb-3'>Education</h4>
					<div>
						{resume.education.map((org) => {
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
							{resume.education.map((org) => {
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
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const resumeRes = await fetchEntry('5j11LhzgPGfIaIianXoi0A');
	const resume = await resumeRes.fields;

	return {
		props: {
			resume,
		},
	};
}
