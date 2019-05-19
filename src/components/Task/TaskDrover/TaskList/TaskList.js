import React from 'react'

const TaskList = props => {
  const cls = ['waves-effect', 'task-item']

  const min = Math.floor(props.task.totalTime/60)
  const sec = props.task.totalTime%60
  const time = (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec)

  return (
    <li className={cls.join(' ') + ' ' + props.task.status}>
      <span
        onClick={() => props.onChangeStatusHandler(props.task.id)}
        onDoubleClick={() => props.onDoubleClickHandler(props.task.id)}
      >{props.task.text}</span>
      <i className='fas fa-minus'
        onClick={() => props.deleteTask(props.task.id)}/>
      <i>{time}</i>
    </li>
  )
}

export default TaskList
