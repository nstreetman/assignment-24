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

  //create _removeTask method
    // - takes
  _removeTask: function(taskIDForRemoval){

      console.log("_removeTask invoked!!1!!", taskIDForRemoval)
      let filteredTasks = this.state.theTasks.filter(function(someVal, ind){
        console.log(someVal)
         if (someVal.id === taskIDForRemoval) {
           return false
         } else{
            return true
         }
      })

      console.log("filtered task list", filteredTasks)

      this.setState({
          theTasks: filteredTasks
      })
  },

  render: function (){
    // console.log('this.state.theTasks  : ', this.state.theTasks)
    return(
      <div className="container-div">
        <h1>My Task List</h1>
        <InputComponent updateTaskList={this._updateTheTasks}/>
        <hr/>
        <ListItem tasksList={this.state.theTasks}  removeTask={this._removeTask}/>
      </div>
    )
  }
})

const InputComponent = React.createClass({
  _handleTaskInput: function(){
        let newObjTask = {
          task: this.refs.taskInput.value,
          id: Date.now().toString()

        }
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
  _handleRemoveClick: function(evt){
    let removeIconEl = evt.target
    console.log(removeIconEl.dataset.id)


    this.props.removeTask(removeIconEl.dataset.id)

  },

  _createTaskListRows: function(arrayOfTaskObjects){
    let component = this
    let jsxArray = arrayOfTaskObjects.map(function(ObjTasks){
      console.log (arrayOfTaskObjects)
      return (
            <tr>
              <td className="task">{ObjTasks.task}</td>
              <td className="trash"><i className="fa fa-trash-o" aria-hidden="true" onClick={component._handleRemoveClick} data-id={ObjTasks.id}></i></td>
            </tr>

      )
    })
    return jsxArray
  },

  render: function(){
    return (
      <div className="ListContainer">
        <h2>List of Tasks:</h2>
        <table className="list-item-format">
          <tbody>
            {this._createTaskListRows(this.props.tasksList)}

          </tbody>
        </table>
      </div>
    )
  }
})
