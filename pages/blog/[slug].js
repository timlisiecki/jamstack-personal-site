import { fetchBlogs } from '../../utils/contentfulEntries';
import Head from 'next/head';
import Layout from '../../layouts/Main';
import PostHeader from '../../components/blog-posts/PostHeader';
import PostContent from '../../components/blog-posts/PostContent';

export default function Slug({ post }) {
	return (
		<Layout>
			<Head>
				<title>{post.fields.title}</title>
				<meta name='description' content={post.fields.seoDescription} />
			</Head>
			<PostHeader
				title={post.fields.title}
				date={post.sys.createdAt}
				desc='I blog about things related to self learning and web/software development.'
			/>
			<PostContent content={post.fields} />
		</Layout>
	);
}

export async function getStaticPaths() {
	const posts = await fetchBlogs();
	const paths = await posts.map(({ fields: { slug } }) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const res = await fetchBlogs();
	const slugs = res.filter((blog) => {
		if (blog.fields.slug === context.params.slug) return blog;
	});
	const post = slugs.pop();

	if (!post) return { props: {} };

	return {
		props: {
			post,
		},
	};
}
