import React,{Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import ResponsiveApp from './ResponsiveApp';
import BookCab from './BookCab';

class Routes extends Component {
	render()
	{
		return (
			<div>
				<Router history={browserHistory}>
					<Route path="/" component={ResponsiveApp} />
					<Route path="/bookola" component={BookCab} />
				</Router>
			</div>
		);
	}
}

export default Routes;