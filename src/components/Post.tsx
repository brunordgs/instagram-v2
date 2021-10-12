import {
	BookmarkIcon,
	ChatIcon,
	DotsHorizontalIcon,
	EmojiHappyIcon,
	HeartIcon,
	PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

interface Props {
	id: string;
	username: string;
	userImage: string;
	image: string;
	caption: string;
}

export default function Post({ id, username, userImage, image, caption }: Props) {
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
			<div className="flex justify-between p-4">
				<div className="flex space-x-4">
					<HeartIcon className="btn" />
					<ChatIcon className="btn" />
					<PaperAirplaneIcon className="btn rotate-45" />
				</div>

				<BookmarkIcon className="btn" />
			</div>

			{/* Caption */}
			<p className="p-5 truncante">
				<span className="font-bold mr-1">{username}</span> {caption}
			</p>

			{/* Comments */}

			{/* Input box */}
			<form className="flex items-center p-4">
				<EmojiHappyIcon className="h-7" />
				<input
					type="text"
					placeholder="Add a comment..."
					className="border-none flex-1 focus:ring-0 outline-none"
				/>
				<button className="font-semibold text-blue-400">Post</button>
			</form>
		</div>
	);
}
