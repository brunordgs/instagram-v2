export default function MiniProfile() {
	return (
		<div className="flex items-center justify-between mt-14 ml-10">
			<img
				src="https://github.com/brunordgs.png"
				alt=""
				className="w-16 h-16 rounded-full border p-[2px]"
			/>

			<div className="flex-1 mx-4">
				<h2 className="font-bold">brunordgs</h2>
				<h3 className="text-sm text-gray-400">Welcome to instagram</h3>
			</div>

			<button className="text-blue-400 text-sm font-semibold">Sign Out</button>
		</div>
	);
}
