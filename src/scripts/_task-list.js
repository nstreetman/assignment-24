import React from 'react';

// console.log("howdy!")
///Basically the same as your in class demo of the "Secrets Box", just modified for my purposes.

export const MyTaskList = React.createClass({
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
    // console.log('this.state.theTasks  : ', this.state.theTasks)
    return(
      <div className="container-div">
        <h1>My Task List</h1>
        <InputComponent updateTaskList={this._updateTheTasks}/>
        <hr/>
        <ListItem tasksList={this.state.theTasks} />
      </div>
    )
  }
})

const InputComponent = React.createClass({
    _handleTaskInput: function(){
        let newObjTask = {task: this.refs.taskInput.value}
        this.props.updateTaskList(newObjTask)
        this.refs.taskInput.value = ''
},

  render: function(){
    return (
      <div className="task-input-box">
      <input ref="taskInput" type='text' className="form-control" placeholder="What you gotta do?"/>
      <button className="btn btn-success btn-md" onClick={this._handleTaskInput}>
      <i className="fa fa-plus"/>
      </button>
      </div>
    )
  }
})

const ListItem = React.createClass({
  _createTaskList: function(arrayOfTaskObjects){
    let jsxArray = arrayOfTaskObjects.map(function(ObjTasks){
      console.log (arrayOfTaskObjects)
      return (
        <table className="list-item-format">
          <tbody>
            <tr>
              <td><input type="checkbox" className="checkbox" value="checkbox"></input></td>
              <td>{ObjTasks.task}</td>
              <td><i className="fa fa-trash-o" aria-hidden="true"></i></td>
            </tr>
            </tbody>
        </table>
      )
    })
    return jsxArray
  },

  render: function(){
    return (
      <div className="ListContainer">
        <h2>List of Tasks:</h2>
        {this._createTaskList(this.props.tasksList)}
      </div>
    )
  }
})
