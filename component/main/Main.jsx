var React = require( 'react' );
var NavBar = require('../components/navbar.jsx');
var ChatRoom = require('../components/chat.js');

var Main = React.createClass( {
	displayName: 'Main',
	render: function() {
		return (
			<div>
				<NavBar />
				<p>main content</p>
				<p>ChatRoom</p>
				<div id='firechat-wrapper'></div>
			</div>
			
		);
	}
} );

module.exports = Main;
