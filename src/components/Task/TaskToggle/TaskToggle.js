import React from 'react'
import './taskToggle.sass'

const TaskToggle = props => {
  const cls = ['fas', 'fa-angle-double-right']
  const clsButton = ['sidenav-trigger', 'task-toggle' ]

  return (
    <a
      href="/#"
      data-target="task-drover"
      className={clsButton.join(' ')}
    >
      <i className={cls.join(' ')}/>
    </a>
  )
}

export default TaskToggle
