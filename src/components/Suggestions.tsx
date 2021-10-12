import { useEffect, useState } from 'react';
import faker from 'faker';

export default function Suggestions() {
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const suggestions = [...Array(5)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}));

		setSuggestions(suggestions);
	}, []);

	return (
		<div className="mt-4 ml-10">
			<div className="flex justify-between text-sm mb-5">
				<h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
				<button className="text-gray-600 font-semibold">See All</button>
			</div>

			{suggestions.map(({ id, avatar, name, username, company }) => (
				<div key={id} className="flex items-center mt-3">
					<img src={avatar} alt={name} className="h-10 rounded-full border p-[2px]" />

					<div className="flex-1 ml-4">
						<h2 className="font-semibold text-sm">{username}</h2>
						<h3 className="text-xs text-gray-400 truncate w-11/12">Works at {company.name}</h3>
					</div>

					<button className="text-blue-400 text-xs font-bold">Follow</button>
				</div>
			))}
		</div>
	);
}
