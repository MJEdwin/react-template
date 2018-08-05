import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "hello,world!"
        }
    }
    /**
     * 当input值发生改变
     * @param {React.ChangeEvent<HTMLInputElement>} e 
     */
    onValueChange = (e) => {
        this.setState({
            value: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <input value={this.state.value} type="text" onChange={this.onValueChange} />
                <div>{this.state.value}</div>
            </div>
        )
    }
}