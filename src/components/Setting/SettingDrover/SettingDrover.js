import React from 'react'
import './settingDrover.sass'
import BackDrop from '../../UI/BackDrop/BackDrop'
import SettingControls from './SettingControls/SettingControls'

const Drover = props => {
  const cls = ['drover']
  props.isOpen ? cls.push('open') : cls.push('close')

  return (
    <React.Fragment>
      <div className={cls.join(' ')}>
        <SettingControls />
      </div>
      {props.isOpen ? <BackDrop onClose={props.onClose}/> : null}
    </React.Fragment>
  )
}

export default Drover
