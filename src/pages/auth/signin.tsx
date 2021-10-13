import { GetServerSideProps } from 'next';
import { getProviders, signIn } from 'next-auth/react';

export default function Signin({ providers }) {
	return (
		<>
			{Object.values(providers).map((provider) => (
				<div key={provider.name}>
					<button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
				</div>
			))}
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
