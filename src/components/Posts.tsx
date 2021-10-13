import Post from './Post';

const DUMMY_DATA = [
	{
		id: '123',
		username: 'Diego Fernandes',
		userImage: 'https://github.com/diego3g.png',
		image: 'https://github.com/diego3g.png',
		caption: 'Subscribe and destroy the like button',
	},
	// {
	// 	id: '321',
	// 	username: 'Diego Fernandes',
	// 	userImage: 'https://github.com/diego3g.png',
	// 	image: 'https://github.com/diego3g.png',
	// 	caption: 'Subscribe and destroy the like button',
	// },
];

export default function Posts() {
	return (
		<div>
			{DUMMY_DATA.map(({ id, username, userImage, image, caption }) => (
				<Post
					key={id}
					id={id}
					username={username}
					userImage={userImage}
					image={image}
					caption={caption}
				/>
			))}
		</div>
	);
}
