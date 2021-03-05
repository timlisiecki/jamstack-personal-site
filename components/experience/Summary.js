import ReactMarkdown from 'react-markdown';

function Summary({ summary }) {
	return (
		<section className='max-w-4xl mx-auto mb-8'>
			<div className='dark:text-white'>
				<h4 className='mb-3'>Summary</h4>
				<div>
					<ReactMarkdown>{summary}</ReactMarkdown>
				</div>
			</div>
		</section>
	);
}

export default Summary;
