import { fetchEntry } from '../utils/contentfulEntries';
import Head from 'next/head';
import Layout from '../layouts/Main';
import PageHeader from '../components/PageHeader';
import AboutMe from '../components/about-me/AboutMe';
import ContactInfo from '../components/about-me/ContactInfo';
import ContactForm from '../components/forms/ContactForm';
import FormWrapper from '../components/forms/FormWrapper';

export default function About({ bio }) {
	return (
		<Layout>
			<Head>
				<title>Contact | Tim Lisiecki</title>
				<meta name='description' content='Tim Lisiecki is a Front End Developer based in Boston, MA.' />
			</Head>
			<PageHeader
				title='Contact'
				phrase='Reach Out To Me'
				desc='Feel free to reach out to me and I will get back to you at my earliest convenience.'
			/>
			<div className='max-w-4xl mx-auto grid grid-cols-2 gap-x-8 gap-y-8'>
				<ContactInfo
					linkedInUrl={bio.linkedInUrl}
					githubUrl={bio.githubUrl}
					freelanceUrl={bio.freelanceUrl}
					contactEmailAddress={bio.contactEmailAddress}
					isContactPage
				/>
				<FormWrapper>
					<ContactForm />
				</FormWrapper>
			</div>
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
