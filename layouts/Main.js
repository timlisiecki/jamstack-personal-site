import { useState } from 'react';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import ContactForm from '../components/forms/ContactForm';

export default function Main({ children }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<div>
			<Navbar />

			{children}

			<Footer />
		</div>
	);
}
