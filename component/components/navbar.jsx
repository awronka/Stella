var React = require( 'react' );
// var NavBarItem = require('./navbarItem.js');
var divStyle = {
  color: 'blue',
};

var containerStyle = {
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
}

var NavBar = React.createClass( {
	displayName: 'NavBar',
	
	render: function() {
		return (
		<div style={containerStyle}>
			<div style={navStyle}>
				<p>NavBar</p>
				  <a class="btn btn-primary" id="save">
        <i class="fa fa-save fa-lg"></i> Save</a>
			</div>
		<div style={docWindowStyle}>Doc Window</div>
		<div style={drawWindowStyle}>Draw Window</div>
		<div style={chatWindowStyle}>chatWindow</div>
		</div>
		);
	}
} );

module.exports = NavBar;