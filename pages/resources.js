import { fetchEntries } from '../utils/contentfulEntries';
import Head from 'next/head';
import Layout from '../layouts/Main';
import PageHeader from '../components/PageHeader';
import DisplayEntries from '../components/display-entries/DisplayEntries';

export default function Resources({ resources }) {
	return (
		<Layout>
			<Head>
				<title>Resources | Tim Lisiecki</title>
				<meta name='description' content='Tim Lisiecki is a Front End Developer based in Boston, MA.' />
			</Head>
			<PageHeader
				title='Resources'
				phrase='Sharing is caring'
				desc='For those who would like to know how I learned everything I have over the years.'
			/>

			<DisplayEntries
				entries={resources}
				title='Resources'
				desc="Here's courses, books, and other resources that have helped me learn and understand web/software development over the
				years, as well blogs that I have written detail my experiences."
			/>
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetchEntries({ params: { 'sys.contentType.sys.id[in]': 'book,course' } });
	const resources = await res.map((resource) => {
		return resource;
	});

	return {
		props: {
			resources,
		},
	};
}
