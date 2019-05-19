import React from 'react'
import './taskDrover.sass'
import {connect} from 'react-redux'
import TaskList from './TaskList/TaskList'

const TaskDrover = props => {

  const sorted = (item) => {
    return(item.status === 'done' ? 1 : -1)
  }

  return (
    <ul id="task-drover" className="sidenav">
      <li className="task-titel">Task's list:</li>
      <li className="waves-effect waves-green add-task input-field">
        <input
          id="task-text"
          type="text"
          className="validate"
          placeholder="Add task"
          onChange={event => props.addText(event.target.value)}
          onKeyPress={event => event.key === 'Enter' ? props.addTask() : false}
        />
      </li>
      {props.task.sort(sorted).map((item, index) => {return(<TaskList
        key={index}
        task={item}
        index={index}
        onChangeStatusHandler={props.onChangeStatusHandler}
        onDoubleClickHandler={props.onDoubleClickHandler}
        deleteTask={props.deleteTask}
      />)})}
    </ul>
  )
}

function mapStateToProps (state) {
  return {
    count: state.task.count,
    task: state.task.task
  }
}

export default connect(mapStateToProps)(TaskDrover)
