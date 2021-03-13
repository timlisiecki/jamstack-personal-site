import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import Card from '../Card';
import Pagination from '../Pagination';
import SortAndFilterInputs from '../SortAndFilterInputs';

function DisplayEntries(props) {
	const [entries, setEntries] = useState(props.entries); // should take props as state

	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		if (urlParams.has('sort')) {
			if (urlParams.get('sort') === 'date') {
				setEntries(entries.sort((a, b) => a.sys.updatedAt - b.sys.updatedAt));
			}

			if (urlParams.get('sort') === 'a-z') {
				setEntries(entries.sort((a, b) => a.fields.title.localeCompare(b.fields.title)));
			}
		}

		if (urlParams.has('filter')) {
			if (urlParams.get('filter') === 'books') {
				setEntries(entries.filter((entry) => entry.sys.contentType.sys.id === 'book'));
			}

			if (urlParams.get('filter') === 'courses') {
				setEntries(entries.filter((entry) => entry.sys.contentType.sys.id === 'course'));
			}
		}
	}, []);

	return (
		<div className='relative bg-gray-50 dark:bg-regal-700 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
			<div className='relative max-w-7xl mx-auto'>
				<div className='mb-12 text-center'>
					<h2 className='text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl'>{props.title}</h2>
					<p className='my-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300'>{props.desc}</p>
				</div>
				<SortAndFilterInputs />
				<div className='mt-5 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none'>
					{entries.map((entry) => {
						let entryProps = {
							key: uuid(),
							type: entry.sys.contentType.sys.id,
							title: entry.fields.title,
							desc: entry.fields.description,
							link: entry.fields.link,
							tags: entry.fields.tags,
						};

						if (entry.fields.author) {
							entryProps.author = entry.fields.author;
						}

						if (entry.sys.contentType.sys.id === 'blog') {
							entryProps.date = entry.sys.createdAt;
							entryProps.link = `/${entry.sys.contentType.sys.id}/${entry.fields.slug}`;
						}

						if (entry.fields.banner) {
							entryProps.image = entry.fields.banner.fields;
						}

						if (entry.fields.codeLink) {
							entryProps.sourceLink = entry.fields.codeLink;
						}

						if (entry.fields.organization) {
							entryProps.organization = entry.fields.organization.fields.organization;
						}

						return <Card {...entryProps} />;
					})}
				</div>
				{/* <Pagination /> */}
			</div>
		</div>
	);
}

export default DisplayEntries;
