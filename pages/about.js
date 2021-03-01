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
				desc='Two Truths and a Lie: I am a good cook, I have travelled all over the world, and I am a boat captain.'
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
