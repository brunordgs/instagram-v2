import faker from 'faker';
import { useEffect, useState } from 'react';
import Story from './Story';

export default function Stories() {
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const suggestions = [...Array(20)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}));

		setSuggestions(suggestions);
	}, []);

	return (
		<div className="flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
			{suggestions.map(({ id, avatar, username, name }) => (
				<Story key={id} avatar={avatar} username={username} name={name} />
			))}
		</div>
	);
}
