import { onSnapshot, query, collection, orderBy } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import Post from './Post';

export default function Posts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (snapshot) => {
			setPosts(snapshot.docs);
		});
	}, [db]);

	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					username={post.data().username}
					userImage={post.data().profileImg}
					image={post.data().image}
					caption={post.data().caption}
				/>
			))}
		</div>
	);
}
