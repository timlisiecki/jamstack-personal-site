import { fetchEntry } from '../utils/contentfulEntries';
import Head from 'next/head';
import Layout from '../layouts/Main';
import PageHeader from '../components/PageHeader';
import AboutMe from '../components/about-me/AboutMe';

export default function About({ bio }) {
	return (
		<Layout>
			<Head>
				<title>About me | Tim Lisiecki</title>
				<meta name='description' content='Tim Lisiecki is a Front End Developer based in Boston, MA.' />
			</Head>
			<PageHeader
				title='About me'
				phrase={`It's not you, it's me`}
				desc='Learn more about how I got into web development and software engineering.'
			/>
			<AboutMe {...bio} />
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetchEntry('65IYqsA48yoV67sxOR8cP9');
	const bio = await res.fields;

	return {
		props: {
			bio,
		},
	};
}
