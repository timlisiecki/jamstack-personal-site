import { fetchEntry } from '../utils/contentfulEntries';
import Head from 'next/head';
import Layout from '../layouts/Main';
import HomeHero from '../components/HomeHero';
import SimpleCTA from '../components/SimpleCTA';
import Stats from '../components/Stats';
import FeaturedContent from '../components/FeaturedContent';

export default function Home(props) {
	return (
		<Layout>
			<Head>
				<title>Tim Lisiecki - Front End Developer</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<HomeHero {...props.bio} />
				<SimpleCTA />
				<FeaturedContent content={props.featuredProjectsEntry} />
				<Stats />
			</main>
		</Layout>
	);
}

export async function getStaticProps() {
	const featuredProjects = await fetchEntry('747uP7AtItjtrsvET4KSmw');
	const bioRes = await fetchEntry('65IYqsA48yoV67sxOR8cP9');
	const featuredProjectsEntry = await featuredProjects.fields;
	const bio = await bioRes.fields;

	return {
		props: {
			bio,
			featuredProjectsEntry,
		},
	};
}
