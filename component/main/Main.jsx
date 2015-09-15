var React = require( 'react' );
var NavBar = require('../components/navbar.jsx');
var ChatRoom = require('../components/chat.jsx');

var Main = React.createClass( {
	displayName: 'Main',
	render: function() {
		return (
			<div>
				<NavBar />
				<p>main content</p>
				<ChatRoom/>
				<div id='firechat-wrapper'></div>
			</div>
			
		);
	}
} );

module.exports = Main;
