var React = require( 'react' );
var NavBar = require('../components/navbar.js');

var Main = React.createClass( {
	displayName: 'Main',
	render: function() {
		return (
			<div>
				<NavBar />
				<p>main content</p>
			</div>
		);
	}
} );

module.exports = Main;
