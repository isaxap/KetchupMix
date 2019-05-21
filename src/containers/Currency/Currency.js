import React, {Component}  from 'react'
import axios from 'axios'
import './currency.sass'
import Loader from '../../components/UI/Loader/Loader'

class Currency extends Component {

  state = {
    loading: true
  }

  componentWillMount () {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://currate.ru/api/?get=rates&pairs=USDRUB,EURRUB&key=5b4c7b07078e9e9778c98106db1495c6`)
    .then(res => {
      this.setState({currency: res.data.data, loading: false})
      console.log(this.state);
  })
  }

  render () {
    return (
      <div className="currency">
        {this.state.loading ?
            <Loader /> :
            <React.Fragment>
              <span>{'EUR: ' + this.state.currency.EURRUB}</span><br />
              <span>{'USD: ' + this.state.currency.USDRUB}</span>
            </React.Fragment>
        }
      </div>
    )
  }

}
export default Currency
