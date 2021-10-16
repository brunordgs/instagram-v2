import '../styles/global.css';
import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<RecoilRoot>
				<Head>
					<title>Instagram 2.0</title>
					<link rel="icon" type="image/png" href="/static/instagram-icon.png" />
				</Head>
				<Component {...pageProps} />
			</RecoilRoot>
		</SessionProvider>
	);
}

export default MyApp;
