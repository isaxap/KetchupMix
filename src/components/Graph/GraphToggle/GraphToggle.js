import React from 'react'
import './graphToggle.sass'

const GraphToggle = props => {
  const cls = ['fas', 'graph-toggle']
  props.isOpen ? cls.push('fa-angle-double-down') : cls.push('fa-angle-double-up')

  return (
    <i
      className={cls.join(' ')}
      onClick={props.onToggle}
<<<<<<< HEAD
    >  </i>
=======
    />
>>>>>>> local
  )
}

export default GraphToggle
