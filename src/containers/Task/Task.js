import React, {Component} from 'react'
import './task.sass'
import {connect} from 'react-redux'
import {addTask, updateTask, deleteTask} from '../../redux/actions/actionTask'
import TaskToggle from '../../components/Task/TaskToggle/TaskToggle'
import TaskDrover from '../../components/Task/TaskDrover/TaskDrover'

class Task extends Component {

  state: {
    textTask: 'null'
  }

  onChangeStatusHandler = index => {
    this.props.updateTask(index, 1)
  }

  onDoubleClickHandler = index => {
    this.props.updateTask(index, 2)
  }

  textTask = text => {
    this.setState({textTask: text})
  }

  addTask = () => {
    const text = this.state.textTask
    this.props.addTask(text)
  }

  render() {
    return (
      <React.Fragment>
        <TaskToggle/>
        <TaskDrover
          addTask={this.addTask}
          addText={this.textTask}
          onChangeStatusHandler={this.onChangeStatusHandler}
          onDoubleClickHandler={this.onDoubleClickHandler}
          deleteTask={this.props.deleteTask}/>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    //SETTINGS
    timers: state.setup.timers,
    countTomato: state.setup.countTomato,
    //CONTROL
    count: state.timer.count
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addTask: (text) => dispatch(addTask(text)),
    updateTask: (id, number) => dispatch(updateTask(id, number)),
    deleteTask: (id) => dispatch(deleteTask(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Task)
