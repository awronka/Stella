//var jQuery = require('jquery-browserify');
var React = require( 'react' );
//var Firebase = require('client-firebase');
//var Firechat = require('firechat');



var ChatRoom = React.createClass( {
	initChat: function(){
		console.log('clicked');
		var firechatRef = new Firebase('https://scorching-inferno-2143.firebaseio.com');
		var chat = new FirechatUI(firechatRef, document.getElementById('firechat-wrapper'));
  		chat.setUser('123', 'Stella');
	},
	render: function() {
		return (
			<button onClick={this.initChat}>Chat</button>
		);
	}
} );

module.exports = ChatRoom;