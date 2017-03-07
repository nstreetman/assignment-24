import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react'
import ReactDOM from 'react-dom'
import {MyTaskList} from './_task-list.js'

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start();
	},

	routes: {
		"" : "showTaskList"
	},

	showTaskList: function(){
		ReactDOM.render(<MyTaskList/>, document.querySelector("#app-container"))
	},

})

let app = new AppRouter()
