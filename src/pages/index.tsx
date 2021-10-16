import Feed from '../components/Feed';
import Header from '../components/ui/Header';
import Modal from '../components/ui/Modal';

export default function Home() {
	return (
		<div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
			<Modal />
			<Header />
			<Feed />
		</div>
	);
}
