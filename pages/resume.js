import { fetchEntries, fetchEntry } from '../utils/contentfulEntries';
import Head from 'next/head';
import Layout from '../layouts/Main';
import PageHeader from '../components/PageHeader';
import WorkHistory from '../components/experience/WorkHistory';
import EducationHistory from '../components/experience/EducationHistory';
import Skills from '../components/experience/Skills';
import Summary from '../components/experience/Summary';

export default function Resume({ resume, courses }) {
	return (
		<Layout>
			<Head>
				<title>{resume.title} | Tim Lisiecki</title>
				<meta name='description' content='Tim Lisiecki is a Front End Developer based in Boston, MA.' />
			</Head>
			<PageHeader title='Resume' phrase='Experience is key' desc='But is it really work if you love what you do?' />
			<div className='px-4 lg:px-8'>
				<Summary summary={resume.summary} />
				<Skills skills={resume.skills} />
				<WorkHistory title='Experience' roles={resume.employmentHistory} />
				<EducationHistory title='Education' orgs={resume.education} courses={courses} />
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const resumeRes = await fetchEntry('5j11LhzgPGfIaIianXoi0A');
	const resume = await resumeRes.fields;
	const courseRes = await fetchEntries({ content_type: 'course' });
	const courses = await courseRes.map((course) => {
		return course;
	});

	return {
		props: {
			resume,
			courses,
		},
	};
}
