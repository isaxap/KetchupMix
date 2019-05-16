import React from 'react'
import './drover.sass'
import BackDrop from '../../UI/BackDrop/BackDrop'

const Drover = props => {
  const cls = ['drover']
  props.isOpen ? cls.push('open') : cls.push('close')

  return (
    <React.Fragment>
      <div className={cls.join(' ')}>
      </div>
      {props.isOpen ? <BackDrop onClose={props.onClose}/> : null}
    </React.Fragment>
  )
}

export default Drover
