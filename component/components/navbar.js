var React = require( 'react' );


var NavBar = React.createClass( {
	displayName: 'NavBar',
	render: function() {
		return (
			<div class="test-nav">
				<p>NavBar</p>
			</div>
		);
	}
} );

module.exports = NavBar;