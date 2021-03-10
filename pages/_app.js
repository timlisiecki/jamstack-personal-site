import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute='class' disableTransitionOnChange>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
