var React = require( 'react' );

var ChatRoom = React.createClass( {
	initChat: function(){
		console.log('clicked');
		var firechatRef = new Firebase('https://scorching-inferno-2143.firebaseio.com');
		var chat = new FirechatUI(firechatRef, document.getElementById('firechat-wrapper'));
  		chat.setUser('123', 'Stella');
  		//chat.createRoom('Expert Help Session', 'private', chat.enterRoom(123));
	},
	render: function() {
		return (
			<button onClick={this.initChat}>Chat</button>
		);
	}
} );

module.exports = ChatRoom;