import React from 'react'
import './settingToggle.sass'

const SettingToggle = props => {
  const cls = ['fas', 'setting-toggle']
  props.isOpen ? cls.push('fa-times') : cls.push('fa-cog')

  return (
    <i
      className={cls.join(' ')}
      onClick={props.onToggle}
    />
  )
}

export default SettingToggle
