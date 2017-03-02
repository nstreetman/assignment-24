import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react'
import ReactDOM from 'react-dom'

console.log("howdy!")

let appContainerEl = document.querySelector('#app-container')

const MyToDoList = React.createClass({


  render: function (){

    return(
      <div className="container-div">
        <h1>Finally, a ToDo List</h1>
        <div className="ToDo-Input-Box">
        <input ref="ToDoInput" type='text' className="form-control" placeholder="What you gotta do?"/>
        <button className="btn btn-success btn-lg" onClick={this._handleNewSecret}>
        <i className="fa fa-plus"/>
      </button>
        </div>
        <hr/>
      </div>
    )
  }
})



ReactDOM.render(  <MyToDoList /> , appContainerEl)
