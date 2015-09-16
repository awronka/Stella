var React = require( 'react' );
var NavBar = require('../components/navbar.jsx');
var ChatRoom = require('../components/chat.jsx');
var AppActions = require('../components/app-actions.js')	

var Main = React.createClass( {
	displayName: 'Main',
	handler: function(){
		console.log(AppActions)
		//AppActions.addItem()
	},
	render: function() {
		return (
			<div>
				<NavBar />
				<p onClick={this.handler}>main content</p>
				<ChatRoom/>
				<div id='firechat-wrapper'></div>
			</div>
			
		);
	}
} );

module.exports = Main;
