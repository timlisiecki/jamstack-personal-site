import uuid from 'react-uuid';
import Card from '../Card';
import Pagination from '../Pagination';
import SortAndFilterInputs from '../SortAndFilterInputs';

function DisplayEntries(props) {
	return (
		<div className='relative bg-gray-50 dark:bg-blue-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
			<div className='relative max-w-7xl mx-auto'>
				<div className='text-center'>
					<h2 className='text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl'>{props.title}</h2>
					<p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4'>{props.desc}</p>
				</div>
				{/* <SortAndFilterInputs /> */}
				<div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none'>
					{props.entries
						// .sort((a, b) => a.sys.updatedAt - b.sys.updatedAt)
						// .sort((a, b) => a.fields.title.localeCompare(b.fields.title))
						.map((entry) => {
							let entryProps = {
								key: uuid(),
								type: entry.sys.contentType.sys.id,
								title: entry.fields.title,
								desc: entry.fields.description,
								link: entry.fields.link,
								tags: entry.fields.tags || null,
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
