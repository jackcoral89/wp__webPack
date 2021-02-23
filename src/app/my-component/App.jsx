import React, { useState } from 'react';

export default function App() {

	const [state, setstate] = useState('test');

	return (
		<div>
			<h1>Hello World! React app here !</h1>
			<h2>{state}</h2>
		</div>
	);
}