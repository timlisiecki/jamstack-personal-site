import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class SiteDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta charSet='utf-8' />
				</Head>
				<body className='bg-white dark:bg-blue-900'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
