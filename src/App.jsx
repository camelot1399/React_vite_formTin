import { useEffect, useState } from 'react';
import './assets/scss/app.scss';
import { Form } from './components/form/Form';
function App() {

	const [theme, setTheme] = useState('light');

	useEffect(() => {
		document.body.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<div className="App">
			<Form />
		</div>
	)
}

export default App
