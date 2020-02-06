import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "hello,world"
        };
    }

    setValue(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input value={this.state.value} onChange={this.setValue} />
                <div>{this.state.value}</div>
                <button>{this.state.value}</button>
                <select defaultValue="3">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        );
    }
}