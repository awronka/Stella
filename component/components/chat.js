var React = require( 'react' );
var Firebase = require("firebase");


var ChatRoom = React.createClass( {
	initChat: function(){
		var firechatRef = new Firebase('https://scorching-inferno-2143.firebaseio.com');
		var chat = new FirechatUI(chatRef, document.getElementById('firechat-wrapper'));
  		chat.setUser('123', 'Stella');
	},
	render: function() {
		return (
			<p onclick={this.initChat}>Start Chat</p>
		);
	}
} );

module.exports = ChatRoom;