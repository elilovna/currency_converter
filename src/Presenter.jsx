import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select'
// import InputLabel from '@material-ui/core/InputLabel'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import "./presenter.css"

class Presenter extends Component {
    state = {}

    render() {
        return <div>
            <TextField
                id="standard-with-placeholder"
                label="Amount"
                placeholder="number"
            />

            <InputLabel htmlFor="demo-controlled-open-select">currency</InputLabel>
            <Select className="selectors"
                value={this.props.value1}
                onChange={(e) => this.props.firstCurrencyHandle(e.target.value)}
            >
                {this.props.arrayWithCurrencies.map((el, index) => {
                    return <MenuItem id="optionEl" key={index} value={el}>{el}</MenuItem>
                })
                }
            </Select>

            <Select className="selectors" type='text' value={this.props.value2}
                onChange={(e) => this.props.secondCurrencyHandle(e.target.value)}
            >
                {this.props.arrayWithCurrencies.map((el, index) => {
                    return <MenuItem  id="optionEl" key={index} value={el}>{el}</MenuItem>
                })
                }
            </Select>

            <div>exchange rate: {this.props.exchangeRate}</div>
        </div>
    }
}

export default Presenter;