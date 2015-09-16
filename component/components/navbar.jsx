var React = require( 'react' );
// var NavBarItem = require('./navbarItem.js');
var divStyle = {
  color: 'blue',
};

/* apparently you cant make comments in the html portion of this content. I created some css for it. The spaces are the different components that need to be pulled out and created when we get the components ready.*/
var NavBar = React.createClass( {
	displayName: 'NavBar',
	
	render: function() {
		return (
		<div className='container'>
		
	
			<div className="nav"><div className="heading"><h1>Harold<small> is currently helping you</small></h1></div><div className="profile-image">     
				<img src ="http://pickaface.net/includes/themes/clean/img/slide4.png"></img></div></div>
			
	
			<div className="doc-window"><div className="title"><span><em>- - - - - - - - your document - - - - - - - - </em></span></div>
			<div className="doc-whole"> 
			<div className='doc-part-box'><div className="chat-doc"><div className='expert-chat'><span>chat chat chat chat chat chat chat chat chat chat chat chat chat chat chat chat chat chat chat chat chat</span></div> </div><div className="img-doc"><img src='http://1.bp.blogspot.com/-HN6NcUOOAHo/UY4G00YmtxI/AAAAAAABZ4E/z6JSRFFboUk/s1600/1.png'></img></div>
			</div>
			<div className='doc-part-box'><div className="chat-doc">chat chat chat chat chat chat chat chat chat chat chat chat chat chat chat chat chat chat chat chat chat </div><div className="img-doc"></div>
			</div> </div>
			</div>
			
			<div className="draw-window"><div className='draw-box'><h1>draw here</h1></div><div className='tool-box'>tool box</div></div>

					<div className="chat-window">chatWindow</div>
		</div>
		);
	}
} );

module.exports = NavBar;