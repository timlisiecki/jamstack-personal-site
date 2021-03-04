import Navbar from '../components/navigation/Navbar';
import Footer from '../components/Footer';

export default function Main({ children }) {
	return (
		<div>
			<Navbar />

			{children}

			<Footer />
		</div>
	);
}
