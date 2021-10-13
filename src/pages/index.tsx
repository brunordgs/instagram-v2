import Head from 'next/head';
import Header from '../components/ui/Header';
import Feed from '../components/Feed';
import Modal from '../components/ui/Modal';

export default function Home() {
	return (
		<div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
			<Head>
				<title>Instagram 2.0</title>
				<link rel="icon" type="image/png" href="/instagram-icon.png" />
			</Head>

			<Modal />
			<Header />
			<Feed />
		</div>
	);
}
