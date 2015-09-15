


( function () {
	var React = require( 'react' ),
		Main = require( './main/Main.jsx' );
		// NavBar = require('./components/navbar.jsx');
	var remote = window.require( 'remote' );

	window.React = React;
	React.render( <Main />, document.getElementById('attach-body') );
} )();
