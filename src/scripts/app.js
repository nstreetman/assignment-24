import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react'
import ReactDOM from 'react-dom'

console.log("howdy!")
///Heavily inspired by the in class demo of the "Secrets Box" and the "Robots Demo on CodePen"

let appContainerEl = document.querySelector('#app-container')
const MyToDoList = React.createClass({
  getInitialState: function(){
    return {
      theTasks: []
    }
  },

  _updateTheTasks: function(newTask){
    let tasksArrayCopy = this.state.theTasks.map(function(copy){return copy})
    tasksArrayCopy.push(newTask)
    this.setState({
      theTasks: tasksArrayCopy
    })
  },

  render: function (){

    return(
      <div className="container-div">
        <h1>Finally, a ToDo List</h1>
        <InputComponent updateToDoList={this._updateTheTasks}/>
        <hr/>
        <ListItem tasksList={this.state.theTasks} />
      </div>
    )
  }
})

const InputComponent = React.createClass({
    _handleToDoInput: function(){
        let newObjToDo = {
          task: this.refs.ToDo.value
        }
        this.props.updateToDoList(newObjToDo)
        this.refs.ToDo.value =''
},

  render: function(){
    return (
      <div className="ToDo-Input-Box">
      <input ref="ToDoInput" type='text' className="form-control" placeholder="What you gotta do?"/>
      <button className="btn btn-success btn-lg" onClick={this._handleToDoInput}>
      <i className="fa fa-plus"/>
      </button>
      </div>
    )
  }
})

const ListItem = React.createClass({
  _createToDoList: function(arrayOfTaskObjects){
    let jsxArray = arrayOfTaskObjects.map(function(objTasks){
      return (
        <div><input type="checkbox" className="checkbox" value="checkbox"></input>
              <span>{objTasks.task}</span>
              <span><i className="fa fa-plus"/></span>
        </div>
      )
    })
    return jsxArray
  },

  render: function(){
    return (
      <div className="ListContainer">
        <p className="sub-header">"List of Tasks"</p>
        {this._createToDoList(this.props.taskList)}
      </div>
    )
  }
})

ReactDOM.render(  <MyToDoList /> , appContainerEl)
