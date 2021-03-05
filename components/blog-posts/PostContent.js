import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function PostContent(props) {
	return (
		<section className='relative py-16 bg-white dark:bg-regal-800 overflow-hidden'>
			<div className='relative px-4 sm:px-6 lg:px-8'>
				{/* <div className='text-lg max-w-prose mx-auto'>
					<p className='mt-8 text-xl text-gray-500 dark:text-gray-300 leading-8'>
						Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id
						at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
					</p>
				</div> */}
				<article className='mt-6 prose dark:prose-dark prose-lg text-gray-500 dark:text-gray-300 mx-auto'>
					{documentToReactComponents(props.content.content)}
				</article>
			</div>
		</section>
	);
}

export default PostContent;
