var React = require( 'react' );
// var NavBarItem = require('./navbarItem.js');
var divStyle = {
  color: 'blue',
};

/*var containerStyle = {
	display: 'flex',
	flexDirection: 'column',
	height: '400px'
}

var navStyle = {
	width: '100%',
	height: '20%',
	backgroundColor: 'grey'
}

var docWindowStyle = {
	width: '100%',
	height: '30%',
	backgroundColor: 'lightgrey'
}

var drawWindowStyle = {
	width: '100%',
	height: '50%',
	backgroundColor: 'darkgrey'
}

var chatWindowStyle = {
		width: '100%',
		height: '10%',
		backgroundColor: 'grey'
}*/

var NavBar = React.createClass( {
	displayName: 'NavBar',
	
	render: function() {
		return (
		<div className='container-style'>
		<div className="nav"><div className="profile-image"></div></div>
		<div className="doc-window">Doc Window</div>
		<div className="draw-window">Draw Window</div>
		<div className="chat-window">chatWindow</div>
		</div>
		);
	}
} );

module.exports = NavBar;