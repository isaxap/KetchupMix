import React, {Component} from 'react'
import './layout.sass'
import Timer from '../containers//Timer/Timer'
import SettingToggle from '../components/Setting/SettingToggle/SettingToggle'
import SettingDrover from '../components/Setting/SettingDrover/SettingDrover'
import CounterTomato from '../components/CounterTomato/CounterTomato'
import GraphToggle from '../components/Graph/GraphToggle/GraphToggle'
import GraphDrover from '../components/Graph/GraphDrover/GraphDrover'
<<<<<<< HEAD
=======
import Task from '../containers/Task/Task'
>>>>>>> local

class Layout extends Component {
  state = {
    control: {
      status: 'passive', //'active' || 'passive' || 'stop' || 'relax'
      menuSetting: false,
      menuGraph: false
    }
  }

  //Setting
  settingMenuHandler = () => {
    const control = this.state.control
    control.menuSetting = !control.menuSetting
    this.setState ({control})
  }

  menuCloseHandler = () => {
    const control = this.state.control
    control.menuSetting = false
    this.setState ({control})
  }
  //Graph
  graphMenuHandler = () => {
    const control = this.state.control
    control.menuGraph = !control.menuGraph
    this.setState ({control})
  }

  menuGraphCloseHandler = () => {
    const control = this.state.control
    control.menuGraph = false
    this.setState ({control})
  }
  //Other
  changeToRelax = () => {
    const control = this.state.control
    control.status = 'relax'
    this.setState ({control})
  }

  changeBackground = (status) => {
    const control = this.state.control
    control.status = status
    this.setState ({control})
  }

  render() {
    return (
      <React.Fragment>
        <div className={"first-layout " + this.state.control.status}>
          <Task />
          <SettingToggle
            onToggle={this.settingMenuHandler}
            isOpen={this.state.control.menuSetting}
          />
          <SettingDrover
            isOpen={this.state.control.menuSetting}
            onClose={this.menuCloseHandler}
          />
          <Timer
            changeBackground={this.changeBackground}
            changeToRelax={this.changeToRelax}
          />
          <GraphToggle
            onToggle={this.graphMenuHandler}
            isOpen={this.state.control.menuGraph}/>
          <GraphDrover
            onClose={this.menuGraphCloseHandler}
            isOpen={this.state.control.menuGraph}/>
          <CounterTomato />
        </div>
      </React.Fragment>
    )
  }
}

export default Layout
