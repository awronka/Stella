var AppConstants =  require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var AppActions = {
	addItem: function(item){
		console.log("Hit the actions");
		return "Hit the actions";
		// AppDispatcher.handleViewItem({
		// 	actionType : AppConstants.ADD_ITEM,
		// 	item: item
		// });
	},
	removeItem: function(index){
		AppDispatcher.handleViewItem({
			actionType : AppConstants.REMOVE_ITEM,
			index: index
		});
	}
}

module.exports = AppActions;