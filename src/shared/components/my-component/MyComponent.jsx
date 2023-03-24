import React, { useState } from 'react';

export default function App() {

	const [state, setstate] = useState('World');

	return (
		<div>
			<h1>Hello {state}! React app here !</h1>
		</div>
	);
}