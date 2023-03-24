import React from 'react';
import ReactDOM from "react-dom/client";

import './my-component.scss';
import MyComponent from './MyComponent.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<MyComponent />
	</React.StrictMode>
);