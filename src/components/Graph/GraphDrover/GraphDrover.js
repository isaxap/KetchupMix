import React from 'react'
import './graphDrover.sass'
import BackDrop from '../../UI/BackDrop/BackDrop'
import GraphLine from './GraphLine/GraphLine'

const GraphDrover = props => {
  const cls = ['graphDrover']
  props.isOpen ? cls.push('open') : cls.push('close')

  return (
    <React.Fragment>
      <div className={cls.join(' ')}>
        <GraphLine />
      </div>
      {props.isOpen ? <BackDrop onClose={props.onClose}/> : null}
    </React.Fragment>
  )
}

export default GraphDrover
