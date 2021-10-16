import {
	addDoc,
	collection,
	onSnapshot,
	orderBy,
	query,
	serverTimestamp,
} from '.pnpm/@firebase+firestore@3.1.0_@firebase+app@0.7.3/node_modules/@firebase/firestore';
import {
	BookmarkIcon,
	ChatIcon,
	DotsHorizontalIcon,
	EmojiHappyIcon,
	HeartIcon,
	PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import Moment from 'react-moment';

interface Props {
	id: string;
	username: string;
	userImage: string;
	image: string;
	caption: string;
}

export default function Post({ id, username, userImage, image, caption }: Props) {
	const { data: session } = useSession();

	const [comment, setComment] = useState('');
	const [comments, setComments] = useState([]);

	useEffect(() => {
		return onSnapshot(
			query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')),
			(snapshot) => setComments(snapshot.docs),
		);
	}, [db]);

	async function sendComment(e: Event) {
		e.preventDefault();

		const commentToSend = comment;
		setComment('');

		await addDoc(collection(db, 'posts', id, 'comments'), {
			comment: commentToSend,
			username: session.user.username,
			userImage: session.user.image,
			timestamp: serverTimestamp(),
		});
	}

	return (
		<div className="bg-white my-7 border rounded-sm">
			{/* Header */}
			<div className="flex items-center p-5">
				<img
					src={userImage}
					alt={username}
					className="rounded-full w-12 h-12 object-contain border p-1 mr-3"
				/>
				<p className="flex-1 font-bold">{username}</p>
				<DotsHorizontalIcon className="h-5" />
			</div>

			{/* Image */}
			<img src={image} className="object-cover w-full h-[767px]" />

			{/* Buttons */}
			{session && (
				<div className="flex justify-between p-4">
					<div className="flex space-x-4">
						<HeartIcon className="btn" />
						<ChatIcon className="btn" />
						<PaperAirplaneIcon className="btn rotate-45" />
					</div>

					<BookmarkIcon className="btn" />
				</div>
			)}

			{/* Caption */}
			<p className="p-5 truncante">
				<span className="font-bold mr-1">{username}</span> {caption}
			</p>

			{/* Comments */}
			{comments.length && (
				<div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
					{comments.map((comment) => (
						<div key={comment.id} className="flex items-center space-x-2 mb-3">
							<img src={comment.data().userImage} alt="" className="h-7 rounded-full" />
							<p className="text-sm flex-1">
								<strong>{comment.data().username}</strong> {comment.data().comment}
							</p>

							<Moment fromNow className="pr-5 text-xs">
								{comment.data().timestamp?.toDate()}
							</Moment>
						</div>
					))}
				</div>
			)}

			{/* Input box */}
			{session && (
				<form className="flex items-center p-4">
					<EmojiHappyIcon className="h-7" />
					<input
						type="text"
						placeholder="Add a comment..."
						value={comment}
						onChange={(e) => setComment(e.target.value)}
						className="border-none flex-1 focus:ring-0 outline-none"
					/>
					<button
						type="submit"
						disabled={!comment.trim()}
						onClick={sendComment}
						className="font-semibold text-blue-400"
					>
						Post
					</button>
				</form>
			)}
		</div>
	);
}
