import React, { Component } from 'react';
import './index.css';

export default class Index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="spinner-wapper">
                <div className="spinner">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                </div>
            </div>
        );
    }
}