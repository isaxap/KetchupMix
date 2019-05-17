import React, { PureComponent } from 'react';
import {LineChart, Line, XAxis, Tooltip, ResponsiveContainer} from 'recharts';

const data = [
  {
    name: 'Page A', Tomato: 4000, Plan: 2400, amt: 2400,
  },
  {
    name: 'Page B', Tomato: 3000, Plan: 1398, amt: 2210,
  },
  {
    name: 'Page C', Tomato: 2000, Plan: 9800, amt: 2290,
  },
  {
    name: 'Page D', Tomato: 2780, Plan: 3908, amt: 2000,
  },
  {
    name: 'Page E', Tomato: 1890, Plan: 4800, amt: 2181,
  },
  {
    name: 'Page F', Tomato: 2390, Plan: 3800, amt: 2500,
  },
  {
    name: 'Page G', Tomato: 3490, Plan: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
    <div style={{ width: '80%', height: 1000, margin: 'auto' }}>
      <ResponsiveContainer>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Line type="monotone" dataKey="Tomato" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Plan" stroke="#82ca9d" />
      </LineChart>
      </ResponsiveContainer>
    </div>
    );
  }
}
