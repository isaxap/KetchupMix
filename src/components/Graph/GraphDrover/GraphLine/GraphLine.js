import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {YAxis, LineChart, Line, XAxis, Tooltip, ResponsiveContainer} from 'recharts'

class Example extends PureComponent {

  render() {
    return (
    <div style={{ width: '80%', height: 300, margin: 'auto' }}>
      <ResponsiveContainer>
      <LineChart data={this.props.history}>
        <XAxis dataKey="name" />
        <YAxis style={{display: 'none'}}/>
        <Tooltip />
        <Line type="monotone" dataKey="Tomato" stroke="#8C0303" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Plan" stroke="#cc0605" />
      </LineChart>
      </ResponsiveContainer>
    </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    history: state.history.history
  }
}

export default connect(mapStateToProps)(Example)
