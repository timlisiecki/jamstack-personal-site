import { useState } from 'react';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

export default function Main({ children }) {
	return (
		<div>
			<Navbar />

			{children}

			<Modal />
			<Footer />
		</div>
	);
}
