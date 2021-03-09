import { fetchEntries } from '../utils/contentfulEntries';
import Head from 'next/head';
import Layout from '../layouts/Main';
import PageHeader from '../components/PageHeader';
import DisplayEntries from '../components/display-entries/DisplayEntries';

export default function Portfolio({ projects }) {
	// Add useEffect and useState for sort and filter

	return (
		<Layout>
			<Head>
				<title>Portfolio | Tim Lisiecki</title>
				<meta name='description' content='Projects created by Tim Lisiecki, a front end developer based in Boston, MA.' />
			</Head>
			<PageHeader title='Portfolio' phrase='Learn by doing' desc='The only way to learn something is by doing.' />

			<DisplayEntries
				entries={projects}
				title='Projects'
				desc='Check out some of the professional, educational, and personal projects I have worked on over the years.'
			/>
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetchEntries('project');
	const projects = await res.map((project) => {
		return project;
	});

	return {
		props: {
			projects,
		},
	};
}
