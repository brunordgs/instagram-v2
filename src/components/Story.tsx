interface Props {
	avatar: string;
	username: string;
	name: string;
}

export default function Story({ avatar, username, name }: Props) {
	return (
		<div>
			<img
				src={avatar}
				alt={name}
				className="w-14 h-14 rounded-full p-[1.5px] border-2 border-red-500 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
			/>
			<p className="text-xs w-14 truncate text-center">{username}</p>
		</div>
	);
}
