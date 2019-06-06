import React, { Component } from 'react'
import Presenter from './Presenter';
import { getCurrencies } from './getCurrencies'

class Container extends Component {
    state = {
        arrayWithCurrencies: null
    }

    componentWillMount = () => {
        getCurrencies()
            .then(data => {
            const carrWithKeys = Object.keys(data.results)
            this.setState({arrayWithCurrencies: carrWithKeys})
            })


    }
    render() {
        return <Presenter />
    }
}

export default Container;