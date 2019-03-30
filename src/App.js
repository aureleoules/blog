import Router from 'preact-router';
import React from 'preact';

import Home from './pages/Home';
import Article from './pages/Article';

class App extends React.Component {
	render() {
		return ( 
			<div>
				<Router>
					<Home path="/"/>
					<Article path="/:article"/>
				</Router>
			</div>
		)
	}
}

export default App;