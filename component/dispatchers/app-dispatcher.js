var Dispatcher = require('flux').Dispatcher;
// assign is like extend in angular allows for you to apply additional properites on an object. 
var assign = require('react/lib/Object.assign');

var AppDispatcher = assign(new Dispatcher(),{
	handleViewAction: function(action){
		console.log('action', action)
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		})		
	}
})

module.exports = AppDispatcher;