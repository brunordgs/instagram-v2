import { GetServerSideProps } from 'next';
import { getProviders, signIn } from 'next-auth/react';
import Header from '../../components/Header';

export default function Signin({ providers }) {
	return (
		<>
			<Header />

			<div className="flex flex-col items-center justify-center min-h-screen py-2 md:-mt-24 px-14 text-center">
				<img src="/instagram-logo.png" alt="Instagram icon" className="w-80" />
				<p className="font-xs italic">This is not REAL app, is built for study purposes only</p>

				<div className="mt-40">
					{Object.values(providers).map((provider) => (
						<div key={provider.name}>
							<button
								onClick={() => signIn(provider.id, { callbackUrl: '/' })}
								className="p-3 bg-blue-500 rounded-lg text-white"
							>
								Sign in with {provider.name}
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
};
