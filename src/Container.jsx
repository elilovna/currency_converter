import React, { Component } from 'react'
import Presenter from './Presenter';
import { getCurrencies } from './getCurrencies'
import {exchangeRate} from './exchangeRate'

class Container extends Component {
    state = {
        arrayWithCurrencies: null,
        firstCurrency: '',
        secondCurrency: '',
        exchRate: null
    }

    componentWillMount = () => {
        getCurrencies()
            .then(data => {
                const carrWithKeys = Object.keys(data.results)
                this.setState({ arrayWithCurrencies: carrWithKeys })
            })
    }

    firstCurrencyHandle = (e) => {
        console.log(e)
        this.setState({firstCurrency: e})
    }

    secondCurrencyHandle = (e) => {
        console.log(e)
        this.setState({secondCurrency: e})
    }

    chooseCurrency = () => {
        const {firstCurrency, secondCurrency} = this.state
        if (firstCurrency !== '' && secondCurrency !== '') {
            exchangeRate(firstCurrency, secondCurrency)
            .then(data => {
                console.log(data)
                this.setState({exchRate: data})
            })
        } else {
            alert('choose currency')
        }
    }
    render() {
        return <div>
            {this.state.arrayWithCurrencies && <Presenter value={'test'} 
            arrayWithCurrencies={this.state.arrayWithCurrencies}
            firstCurrencyHandle={this.firstCurrencyHandle}
            secondCurrencyHandle={this.secondCurrencyHandle}
            value1={this.state.firstCurrency}
            value2={this.state.secondCurrency}
            exchRate={this.state.exchRate}
            />}
        </div>
    }
}

export default Container;