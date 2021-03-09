import { fetchEntries } from '../utils/contentfulEntries';
import Head from 'next/head';
import Layout from '../layouts/Main';
import PageHeader from '../components/PageHeader';
import DisplayEntries from '../components/display-entries/DisplayEntries';

export default function Blog({ blogs }) {
	return (
		<Layout>
			<Head>
				<title>Blog posts by Tim Lisiecki</title>
				<meta name='description' content='Tim Lisiecki is a Front End Developer based in Boston, MA.' />
			</Head>
			<PageHeader
				title='Blog'
				phrase='I code and I know things'
				desc='I blog about things related to self learning and web/software development.'
			/>
			<DisplayEntries entries={blogs} title='Blogs' desc='Check out some of the I have written.' />
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetchEntries('blog');
	const blogs = await res.map((blog) => {
		return blog;
	});

	return {
		props: {
			blogs,
		},
	};
}
