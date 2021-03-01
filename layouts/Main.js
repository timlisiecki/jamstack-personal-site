import Navbar from '../components/navigation/Navbar';
import Footer from '../components/Footer';

function Main({ children }) {
	return (
		<div>
			<Navbar />

			{children}

			<Footer />
		</div>
	);
}

export default Main;
