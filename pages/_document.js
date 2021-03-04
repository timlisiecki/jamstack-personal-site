import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class SiteDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta charSet='utf-8' />
				</Head>
				<body className='bg-white dark:bg-regal-800'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
