( function () {
	var React = require( 'react' ),
		Main = require( './main/Main.js' ),
		NavBar = require('./components/navbar.js');
	var remote = window.require( 'remote' );

	window.React = React;
	React.render( <Main />, document.body );
} )();
